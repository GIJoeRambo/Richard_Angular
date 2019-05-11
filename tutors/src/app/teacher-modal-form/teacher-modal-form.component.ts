import { TeachersService } from './../../service/teachers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teacher-modal-form',
  templateUrl: './teacher-modal-form.component.html',
  styleUrls: ['./teacher-modal-form.component.css',
              '../../shared/css/teacher-global.css']
})
export class TeacherModalFormComponent implements OnInit {
  public updateForm;
  public qualificationOptions:Object;
  public languageOptions:Object;
  public orgOptions:Object;

  constructor(private fb: FormBuilder, private teachersService: TeachersService) { }

  ngOnInit() {
    this.updateForm = this.fb.group({});
    this.getDropdownOptions();
  }


  /////////////////////////////////////////////methods call by HTML event/////////////////////////////////////////////////
  getDropdownOptions(){
    this.teachersService.getDropdownOptions().subscribe(
      (res) => {
        this.qualificationOptions = res.Data.qualifications;
        this.languageOptions = res.Data.Languages;
        this.orgOptions = res.Data.Orgs;
        console.log(res)
        console.log(this.qualificationOptions)
        console.log(this.languageOptions)
        console.log(this.orgOptions)
      }, 
      (err) => {

      }
    )
  }
} 
