import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Command } from 'protractor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  private valueToBeSubmitted;
  //是否所有表单都fill
  private isSubmitFail:boolean = false;

  @Input() command;
  @Input() witchTeacher;

  @ViewChild('modalUpdateFormComponent') modalUpdateFormComponentObj;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submit() {

    console.log('original value',this.modalUpdateFormComponentObj.updateForm);

    this.valueToBeSubmitted = this.modalUpdateFormComponentObj.updateForm.value;

    this.valueToBeSubmitted.Language = this.checkLanguages();
    this.valueToBeSubmitted.Qualification = this.checkQualifications()
    this.checkOrgs();

    console.log('submitted',this.valueToBeSubmitted);

    //判断是否所有的表单都fill 如果有任何一项没有fill 就会使isSubmitFail的值为true
    for(let i in this.valueToBeSubmitted){
      if(this.valueToBeSubmitted[i] == null){
        this.isSubmitFail = true;
        //用户点击save按钮后 遍历触摸(touch)所有的input表单 目的是触发表单的Validator
        for(let j in this.modalUpdateFormComponentObj.updateForm.controls)
        {
          
          this.modalUpdateFormComponentObj.updateForm.controls[j].touched = true;
        }
        return;
      }
    }

    //console.log('original value',this.modalUpdateFormComponentObj.updateForm.value);
    //console.log('value to be submitted', this.valueToBeSubmitted)




  }

  //to check which language checked
  checkLanguages() {
    //子集(modal-update-form)中 languagesCheckBox元素的集合
    let languageBoxObj = this.modalUpdateFormComponentObj.languagesCheckBox._results;
    let checkedLanguagesList = [];
    for (let i in languageBoxObj) {
      //判断如果某languages被选中 就把它添加到temList中
      if (languageBoxObj[i].nativeElement.checked == true) {
        checkedLanguagesList.push(Number(languageBoxObj[i].nativeElement.value));
      }
    }
    //如果checkedLanguagesList是空的 就说明languages没有任何一项被选中 所以return null
    if(checkedLanguagesList.length !== 0){
      return checkedLanguagesList;
    }
    else{
      return null;
    }
    //console.log(this.checkedLanguagesList)
  }

  //server need Qualification type is list<string>
  //to convert the data 
  checkQualifications() {
    let checkQualificationsList = [];
    if(this.modalUpdateFormComponentObj.updateForm.value.Qualification !== undefined){
      checkQualificationsList.push(this.modalUpdateFormComponentObj.updateForm.value.Qualification);  
    }
  
    if(checkQualificationsList.length!==0){
      return checkQualificationsList;
      
    }
    else{
      return null;
    }
  }

  checkOrgs() {
    //console.log(this.modalUpdateFormComponentObj)
  }

}
