import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeachersService } from '../teachers.service';
import { Command } from 'protractor';
import { queueComponentIndexForCheck } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-modal-update-form',
  templateUrl: './modal-update-form.component.html',
  styleUrls: ['./modal-update-form.component.css']
})
export class ModalUpdateFormComponent implements OnInit {

  private updateForm;
  private groupObj:any;
  private qualificationsListFromService;
  private languagesListFromService;
  private orgsListFromService;
  private teacherQualiId;

  @Input() witchTeacher;
  @Input() command;
  @ViewChildren('lan') languagesCheckBox; 
  constructor(private fb:FormBuilder, private teachersService:TeachersService) { }

  ngOnInit() {
    if(this.command =='Edit'){
      if(this.witchTeacher.TeacherQualificatiion.length !== 0){
        this.teacherQualiId = this.witchTeacher.TeacherQualificatiion[0].TeacherQualiId;
      }
      else{
        this.teacherQualiId = null;
      }
    }

  
    console.log(this.witchTeacher)
  
    if(this.command == 'Add'){
      this.groupObj = {
        FirstName:['',Validators.required],
        LastName:['',Validators.required],
        Gender:['',Validators.required],
        Dob:['',Validators.required],
        Qualification:['',Validators.required],
        MobilePhone:['',Validators.required],
        HomePhone:['',Validators.required],
        Email:['',[Validators.required,Validators.email]],
        IRDNumber:['',Validators.required],
        Language:['',Validators.required],
        IDType:['',Validators.required],
        IDNumber:['',Validators.required],
        ExpiryDate:['',Validators.required]
      }
    }
    else{
      this.groupObj = {
        //formControlName 决定了提交表单时的参数名
        FirstName:[this.witchTeacher.FirstName,Validators.required],
        LastName:[this.witchTeacher.LastName,Validators.required],
        Gender:[this.witchTeacher.Gender,Validators.required],
        //dob:[{value:this.witchTeacher.Dob,disabled:true} || '']
        //★★★★★只有当日期格式为YYYY-MM-DD的时候 才会显示出formControlName的默认值
        Dob:[this.dateFormat(this.witchTeacher.Dob),Validators.required],
        Qualification:[this.teacherQualiId,Validators.required],
        MobilePhone:[this.witchTeacher.MobilePhone,Validators.required],
        HomePhone:[this.witchTeacher.HomePhone,Validators.required],
        Email:[this.witchTeacher.Email,[Validators.required,Validators.email]],
        IRDNumber:[this.witchTeacher.IrdNumber,Validators.required],
        Language:[this.witchTeacher.TeacherLanguage,Validators.required],
        IDType:['',Validators.required],
        IDNumber:['',Validators.required],
        ExpiryDate:['',Validators.required] //用dateFormat
      }
    }

    this.updateForm = this.fb.group(this.groupObj);
    this.teachersService.getApis().subscribe((data) =>
    {
      this.qualificationsListFromService = data.Data.qualifications;
      this.languagesListFromService = data.Data.Languages;
      this.orgsListFromService = data.Data.Orgs;
      //console.log(data)
      //console.log(this.qualificationsListFromService);
    },
    (error) => {console.log(error)})
  }

  dateFormat(date){
    if(date == null){
      return ''
    }
    else{
     //console.log(date.substring(0,9));
     return (date.substring(0,10));
    }
  }

  ifChecked(langId){
    if (this.witchTeacher !== null)
    {
      for(let i of this.witchTeacher.TeacherLanguage){
        if(langId == i.LangId){
          //console.log('a')
          return true;
        }
      }
      return false;
    }
    else{
      return false;
    }
    //console.log('languages',this.witchTeacher.TeacherLanguage);
    //console.log('langId',langId);
    //console.log('return',this.witchTeacher.TeacherLanguage.indexOf(langId));
  }
}
