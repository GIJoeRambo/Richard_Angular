import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Command } from 'protractor';
import { NgbActiveModal, NgbPaginationNumber, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  private valueToBeSubmitted;
  private originalValue;
  //是否所有表单都fill
  private isSubmitFail:boolean = false;
  private errorMessage = '';
  

  @Input() command;
  @Input() witchTeacher;
  @Output() refresh = new EventEmitter;

  @ViewChild('modalUpdateFormComponent') modalUpdateFormComponentObj;
  constructor(private activeModal: NgbActiveModal,private teachersService:TeachersService) { }

  ngOnInit() {
  }

  submit() {
    this.originalValue = this.modalUpdateFormComponentObj.updateForm.value;
    this.valueToBeSubmitted = this.modalUpdateFormComponentObj.updateForm.value;  

    this.valueToBeSubmitted.Language = this.checkLanguages();
    this.valueToBeSubmitted.Qualificatiion = this.checkQualifications()
    this.valueToBeSubmitted.Gender = this.checkGender();
    this.valueToBeSubmitted.IDType = this.checkIdType();
    this.valueToBeSubmitted.DayOfWeek = this.checkOrgs();
    //this.valueToBeSubmitted.Dob = this.checkDate(this.valueToBeSubmitted.Dob);
    //this.valueToBeSubmitted.ExpiryDate = this.checkDate(this.valueToBeSubmitted.ExpiryDate)

    //console.log(this.modalUpdateFormComponentObj.branchesCheckBox._results)
    console.log('submitted',this.valueToBeSubmitted);
    console.log(typeof(this.valueToBeSubmitted.Dob));
    console.log(this.modalUpdateFormComponentObj)

    //判断是否所有的表单都fill 如果有任何一项没有fill 就会使isSubmitFail的值为true
    for(let i in this.valueToBeSubmitted){
      if(this.valueToBeSubmitted[i] == null){
        //this.isSubmitFail = true;
        this.errorMessage = 'Please fill all required inputs.';
        //用户点击save按钮后 遍历触摸(touch)所有的input表单 目的是触发表单的Validator
        for(let j in this.modalUpdateFormComponentObj.updateForm.controls)
        {
          this.modalUpdateFormComponentObj.updateForm.controls[j].touched = true;
        }
        return;
      }
    }

 
    //this.isSubmitFail = false;
    this.errorMessage = '';

    let submit = new FormData();
    submit.append('details',JSON.stringify(this.valueToBeSubmitted));
    submit.append('IdPhoto',this.modalUpdateFormComponentObj.photoToSubmit);
    submit.append('Photo','123456')

    
    //while push a stream of new data
    if(this.command == 'Add'){
      //this.valueToBeSubmitted = JSON.stringify(this.valueToBeSubmitted);
      this.teachersService.addNew(submit).subscribe(
        (data)=>{
          console.log('success',data);
          this.activeModal.close('Close click');
        },
        (error)=>{
          this.errorMessage = error.error.ErrorMessage;
          console.log('Error', error);
        }
      );
    }
    //while update data
    else if(this.command == 'Edit'){

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
    if(this.originalValue.Qualificatiion !== undefined){
      checkQualificationsList.push(Number(this.originalValue.Qualificatiion));  
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
    let temBranches = this.modalUpdateFormComponentObj.branchesCheckBox._results;
    let temBranchesList =[[],[],[],[],[],[],[]] ;

    for(let i of temBranches){
      if(i.nativeElement.checked == true){
        if(i.nativeElement.name =='Monday' ){
          temBranchesList[0].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Tuesday' ){
          temBranchesList[1].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Wednsday' ){
          temBranchesList[2].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Thursday' ){
          temBranchesList[3].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Friday' ){
          temBranchesList[4].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Satday' ){
          temBranchesList[5].push(Number(i.nativeElement.defaultValue))
        }
        if(i.nativeElement.name =='Sunday' ){
          temBranchesList[6].push(Number(i.nativeElement.defaultValue))
        }
      }
    }
    //console.log(temBranchesList)
    return temBranchesList;
  }

  checkIdType(){
    if(this.originalValue.IDType !== null){
      return Number(this.originalValue.IDType)
    }
    else{
      return null
    }
  }
  
  checkGender(){
    if(this.originalValue.Gender !== null){
      return Number(this.originalValue.Gender)
    }
    else{
      return null;
    }
  }

  checkDate(date){
    let newDate = new Date();
    newDate.setTime(Date.parse(date));
    console.log(Date.parse(date))
    console.log(newDate);
    return newDate;
  }
}
