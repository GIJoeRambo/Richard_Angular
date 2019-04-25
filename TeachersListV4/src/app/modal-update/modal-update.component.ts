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

  @Input() command;
  @Input() witchTeacher;

  @ViewChild('modalUpdateFormComponent') modalUpdateFormComponentObj;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

  submit(){
    this.valueToBeSubmitted = this.modalUpdateFormComponentObj.updateForm.value;

    this.valueToBeSubmitted.Language = this.checkLanguages();

    //console.log('original value',this.modalUpdateFormComponentObj.updateForm.value);
    console.log('value to be submitted',this.valueToBeSubmitted)
    
    
    

  }

  //to check which language checked
  checkLanguages(){
    //子集(modal-update-form)中 languagesCheckBox元素的集合
    let languageBoxObj = this.modalUpdateFormComponentObj.languagesCheckBox._results;
    let checkedLanguagesList=[];
    for(let i in languageBoxObj){
      //判断如果某languages被选中 就把它添加到temList中
      if(languageBoxObj[i].nativeElement.checked == true){
        checkedLanguagesList.push(languageBoxObj[i].nativeElement.value);
      }
    }

    return checkedLanguagesList;
    //console.log(this.checkedLanguagesList)
  }

}
