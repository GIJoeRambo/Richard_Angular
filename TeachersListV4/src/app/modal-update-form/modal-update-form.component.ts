import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeachersService } from '../teachers.service';
import { Command } from 'protractor';

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

    //console.log('id',this.teacherQualiId)
    console.log(this.witchTeacher)
  
    if(this.command == 'Add'){
      this.groupObj = {
        gender:[''],
        dob:[''],
        quali:['']
      }
    }
    else{
      this.groupObj = {
        gender:[this.witchTeacher.Gender || ''],
        //dob:[{value:this.witchTeacher.Dob,disabled:true} || '']
        //★★★★★只有当日期格式为YYYY-MM-DD的时候 才会显示出formControlName的默认值
        dob:[this.dateFormat(this.witchTeacher.Dob)|| ''],
        quali:['']
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

  equal(o1,o2){
    return this.teacherQualiId;
  }
}
