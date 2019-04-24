import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
        firstName:[''],
        lastName:[''],
        gender:[''],
        dob:[''],
        quali:[''],
        mobilePh:[''],
        homePh:[''],
        email:[''],
        ird:[''],
        languages:[''],
        idType:[''],
        idNumber:[''],
        expired:['']
      }
    }
    else{
      this.groupObj = {
        firstName:[this.witchTeacher.FirstName],
        lastName:[this.witchTeacher.LastName],
        gender:[this.witchTeacher.Gender],
        //dob:[{value:this.witchTeacher.Dob,disabled:true} || '']
        //★★★★★只有当日期格式为YYYY-MM-DD的时候 才会显示出formControlName的默认值
        dob:[this.dateFormat(this.witchTeacher.Dob)],
        quali:[this.teacherQualiId],
        mobilePh:[this.witchTeacher.MobilePhone],
        homePh:[this.witchTeacher.HomePhone],
        email:[this.witchTeacher.Email],
        ird:[this.witchTeacher.IrdNumber],
        languages:[this.witchTeacher.TeacherLanguage],
        idType:[''],
        idNumber:[''],
        expired:[''] //用dateFormat
      }
    }

    this.updateForm = this.fb.group(this.groupObj);
    this.teachersService.getApis().subscribe((data) =>
    {
      this.qualificationsListFromService = data.Data.qualifications;
      this.languagesListFromService = data.Data.Languages;
      this.orgsListFromService = data.Data.Orgs;
      console.log(this.qualificationsListFromService);
    },
    (error) => {console.log(error)})
  }

  dateFormat(date){
    if(date == null){
      return ''
    }
    else{
      console.log(date.substring(0,9));
     return (date.substring(0,10));
    }
  }

  ifChecked(langId){
    for(let i of this.witchTeacher.TeacherLanguage){
      if(langId == i.LangId){
        //console.log('a')
        return true;
      }
    }
    return false;
    //console.log('languages',this.witchTeacher.TeacherLanguage);
    //console.log('langId',langId);
    //console.log('return',this.witchTeacher.TeacherLanguage.indexOf(langId));
  }
}
