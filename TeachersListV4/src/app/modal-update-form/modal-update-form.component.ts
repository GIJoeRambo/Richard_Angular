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
  private groupObj: any;
  private qualificationsListFromService;
  private languagesListFromService;
  private orgsListFromService;
  private teacherQualiId;
  private teacherQualiName;
  private disabledAllInputsFlag: boolean = false;
  private idTypeList = [{ 'idTypeId': 1, 'idTypeName': 'Driver Lisence' },
  { 'idTypeId': 2, 'idTypeName': '18+' },
  { 'idTypeId': 3, 'idTypeName': 'Passport' }];
  private availableDays = [];
  private week = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Satday", "Sunday"];

  @Input() witchTeacher;
  @Input() command;
  @ViewChildren('lan') languagesCheckBox;
  @ViewChildren('branches') branchesCheckBox;
  constructor(private fb: FormBuilder, private teachersService: TeachersService) { }

  ngOnInit() {
    this.isTeacherQualiIdExist();
    this.disableInputs();
    this.getAvailableDays();

    console.log('witchTeacher', this.witchTeacher)

    if (this.command == 'Add') {
      this.groupObj = {
        FirstName: [null, Validators.required],
        LastName: [null, Validators.required],
        Gender: [null, Validators.required],
        Dob: [null, Validators.required],
        Qualification: [null, Validators.required],
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
      this.groupObj = {
        //formControlName 决定了提交表单时的参数名
        FirstName: [{ value: this.witchTeacher.FirstName, disabled: this.disabledAllInputsFlag }, Validators.required],
        LastName: [{ value: this.witchTeacher.LastName, disabled: this.disabledAllInputsFlag }, Validators.required],
        Gender: [{ value: this.witchTeacher.Gender, disabled: this.disabledAllInputsFlag }, Validators.required],
        //★★★★★只有当日期格式为YYYY-MM-DD的时候 才会显示出formControlName的默认值
        Dob: [{ value: this.dateFormat(this.witchTeacher.Dob), disabled: this.disabledAllInputsFlag }, Validators.required],
        Qualification: [{ value: this.teacherQualiName, disabled: this.disabledAllInputsFlag }, Validators.required],
        MobilePhone: [{ value: this.witchTeacher.MobilePhone, disabled: this.disabledAllInputsFlag }, Validators.required],
        HomePhone: [{ value: this.witchTeacher.HomePhone, disabled: this.disabledAllInputsFlag }, Validators.required],
        Email: [{ value: this.witchTeacher.Email, disabled: this.disabledAllInputsFlag }, [Validators.required, Validators.email]],
        IRDNumber: [{ value: this.witchTeacher.IrdNumber, disabled: this.disabledAllInputsFlag }, Validators.required],
        Language: [{ value: this.witchTeacher.TeacherLanguage, disabled: this.disabledAllInputsFlag }, Validators.required],
        IDType: [{ value: this.witchTeacher.IdType, disabled: this.disabledAllInputsFlag }, Validators.required],
        IDNumber: [{ value: this.witchTeacher.IdNumber, disabled: this.disabledAllInputsFlag }, Validators.required],
        ExpiryDate: [{ value: this.dateFormat(this.witchTeacher.ExpiryDate), disabled: this.disabledAllInputsFlag }, Validators.required], //用dateFormat
        DayOfWeek: [{ value: null, disabled: this.disabledAllInputsFlag }, Validators.required]
      }
    }

    this.updateForm = this.fb.group(this.groupObj);
    this.teachersService.getApis().subscribe((data) => {
      this.qualificationsListFromService = data.Data.qualifications;
      this.languagesListFromService = data.Data.Languages;
      this.orgsListFromService = data.Data.Orgs;
      //onsole.log(this.orgsListFromService)

    },
      (error) => { console.log(error) })
  }

  dateFormat(date) {
    if (date == null) {
      return null;
    }
    else {
      //console.log(date.substring(0,9));
      return (date.substring(0, 10));
    }
  }


  /*
    we need to show the default value in the select box
    but sometimes there's no teacherQualiId in database, so we need to check it,
    if TeacherQualiId == null then return null (means shows default value as '')
    else show the value
  */
  isTeacherQualiIdExist() {
    if (this.command == 'Edit' || this.command == 'Detail') {
      if (this.witchTeacher.TeacherQualificatiion.length !== 0) {
        this.teacherQualiId = this.witchTeacher.TeacherQualificatiion[0].TeacherQualiId;
        this.teacherQualiName = this.witchTeacher.TeacherQualificatiion[0].Quali.QualiName;
      }
      else {
        this.teacherQualiId = null;
      }
    }
  }

  ifLanguagesChecked(langId) {
    if (this.witchTeacher !== null) {
      for (let i of this.witchTeacher.TeacherLanguage) {
        if (langId == i.LangId) {
          //console.log('a')
          return true;
        }
      }
      return false;
    }
    else {
      return false;
    }
    //console.log('languages',this.witchTeacher.TeacherLanguage);
    //console.log('langId',langId);
    //console.log('return',this.witchTeacher.TeacherLanguage.indexOf(langId));
  }

  ifBranchesChecked(orgId, week) {
    if (this.witchTeacher !== null) {
      let weekId = this.week.indexOf(week) + 1;
      for (let i of this.witchTeacher.AvailableDays) {
        if (weekId == i.DayOfWeek) {
          if (orgId == i.OrgId) {
            return true;
          }
        }
      }
      return false;
    }
  }

  /*
    if command is Detail, then only let user to read data, can't modify
    'this.disabledAllInputsFlag = true' means it's Detail mode, disabled all inputs, only readable
    'this.disabledAllInputsFlag = false' means it's Add or Edit mode, users can modify
  */
  disableInputs() {
    if (this.command == 'Detail') {
      this.disabledAllInputsFlag = true;
    }
    else {
      this.disabledAllInputsFlag = false;
    }
  }

  getOrgs(witchDay) {
    if (this.witchTeacher.AvailableDays.length !== 0) {
      let temOrgs = [];
      for (let i of this.witchTeacher.AvailableDays) {
        if (i.DayOfWeek == witchDay) {
          if (temOrgs.indexOf(i.OrgId) == -1) {
            temOrgs.push(i.OrgId);
          }
        }
      }
      return temOrgs;
    }
  }
  getAvailableDays() {
    if (this.command == 'Detail') {
      for (let i of this.witchTeacher.AvailableDays) {
        if (this.availableDays.indexOf(i.DayOfWeek) == -1) {
          this.availableDays.push(i.DayOfWeek)
        }
      }
      //console.log(this.availableDays)
    }
  }
}
