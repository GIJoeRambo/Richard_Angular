import { TeachersService } from './../../service/teachers.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-modal-form',
  templateUrl: './teacher-modal-form.component.html',
  styleUrls: ['./teacher-modal-form.component.css',
    '../../shared/css/teacher-global.css']
})
export class TeacherModalFormComponent implements OnInit {
  public updateForm;
  public qualificationOptions: Object;
  public languageOptions: Object;
  public orgOptions: Object;
  public readOnlyFlag: boolean = false;
  public showLeftImgFlag:boolean = true;
  public showRightImgFlag:boolean = false;

  @Input() command;
  @Input() whichTeacher;

  constructor(private fb: FormBuilder, private teachersService: TeachersService) { }

  ngOnInit() {
    //console.log(this.whichTeacher)
    this.isReadOnly();
    this.updateForm = this.fb.group(this.formGroupAssemble());
    this.getDropdownOptions();
  }


  formGroupAssemble() {
    let groupObj: any;
    if (this.command == 0) {
      groupObj = {
        FirstName: [null, Validators.required],
        LastName: [null, Validators.required],
        Gender: [null, Validators.required],
        Dob: [null, Validators.required],
        Qualificatiion: [null, Validators.required],
        MobilePhone: [null, Validators.required],
        HomePhone: [null, Validators.required],
        Email: [null, [Validators.required, Validators.email]],
        IRDNumber: [null, Validators.required],
        Language: [null, Validators.required],
        IDType: [null, Validators.required],
        IDNumber: [null, Validators.required],
        ExpiryDate: [null, Validators.required],
        DayOfWeek: [null, Validators.required]
      }
    }
    else {
      groupObj = {
        //formControlName 决定了提交表单时的参数名
        FirstName: [{ value: this.whichTeacher.FirstName, disabled: this.readOnlyFlag }, Validators.required],
        LastName: [{ value: this.whichTeacher.LastName, disabled: this.readOnlyFlag }, Validators.required],
        Gender: [{ value: this.whichTeacher.Gender, disabled: this.readOnlyFlag }, Validators.required],
        //★★★★★只有当日期格式为YYYY-MM-DD的时候 才会显示出formControlName的默认值
        Dob: [{ value: this.getDateFormat(this.whichTeacher.Dob), disabled: this.readOnlyFlag }, Validators.required],
        Qualificatiion: [{ value: this.getQualiId(), disabled: this.readOnlyFlag }, Validators.required],
        MobilePhone: [{ value: this.whichTeacher.MobilePhone, disabled: this.readOnlyFlag }, Validators.required],
        HomePhone: [{ value: this.whichTeacher.HomePhone, disabled: this.readOnlyFlag }, Validators.required],
        Email: [{ value: this.whichTeacher.Email, disabled: this.readOnlyFlag }, [Validators.required, Validators.email]],
        IRDNumber: [{ value: this.whichTeacher.IrdNumber, disabled: this.readOnlyFlag }, Validators.required],
        Language: [{ value: this.whichTeacher.TeacherLanguage, disabled: this.readOnlyFlag }, Validators.required],
        IDType: [{ value: this.whichTeacher.IdType, disabled: this.readOnlyFlag }, Validators.required],
        IDNumber: [{ value: this.whichTeacher.IdNumber, disabled: this.readOnlyFlag }, Validators.required],
        ExpiryDate: [{ value: this.getDateFormat(this.whichTeacher.ExpiryDate), disabled: this.readOnlyFlag }, Validators.required], //用dateFormat
        DayOfWeek: [{ value: null, disabled: this.readOnlyFlag }, Validators.required]
      }
    }

    return groupObj;
  }

  /////////////////////////////////////////////methods call by HTML event/////////////////////////////////////////////////

  isLanguageCheck(LanguageId) {
    if (this.command !== 0) {
      for (let i of this.whichTeacher.TeacherLanguage) {
        if (LanguageId == i.LangId) {
          return true;
        }
      }
      return false;
    }
    else {
      return false;
    }
  }

  showPhotos(position){
    let leftImgObj = document.getElementById('img_left');
    let rightImgObj = document.getElementById('img_right');

    if(position == 0){
      this.showLeftImgFlag = true;
      this.showRightImgFlag = false; 

      rightImgObj.style.display = 'none';
      leftImgObj.style.display = 'block';
    } 
    else{
     this.showRightImgFlag = true;
     this.showLeftImgFlag = false;

      leftImgObj.style.display = 'none';
      rightImgObj.style.display = 'block';
    }
  }
  /////////////////////////////////////////////methods call by other methods/////////////////////////////////////////////////
  isReadOnly() {
    if (this.command == 1) {
      this.readOnlyFlag = true;
    }
  }

  getDropdownOptions() {
    this.teachersService.getDropdownOptions().subscribe(
      (res) => {
        this.qualificationOptions = res.Data.qualifications;
        this.languageOptions = res.Data.Languages;
        this.orgOptions = res.Data.Orgs;
        // console.log(res)
        // console.log(this.qualificationOptions)
        // console.log(this.languageOptions)
        // console.log(this.orgOptions)
      },
      (err) => {

      }
    )
  }

  getDateFormat(date){
    if(date !== null){
      return (date.substring(0,10))
    }
  }
  /*
    需要修改 暂时别动了 目前还不知道显示最高学历还是显示所有学历
  */
  getQualiId() {
    if (this.whichTeacher.TeacherQualificatiion.length !== 0) {
      console.log(this.whichTeacher)
      return this.whichTeacher.TeacherQualificatiion[0].TeacherQualiId;
    }
    else {
      return null;
    }
  }
} 
