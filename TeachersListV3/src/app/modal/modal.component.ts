import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private languages = [];
  @Input() command;
  @Input() teacher;

  @ViewChild('MFComponent') mfComponent;

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

  submit(){
    this.dataFormat()
    this.activeModal.close('Close click');
  }

  delete(){
    console.log(this.teacher)
  }

  dataFormat(){
    if(this.mfComponent.registrationForm.value.english == true){
      this.languages.push(1);
    }
    if(this.mfComponent.registrationForm.value.mandrin == true){
      this.languages.push(2);
    }
    if(this.mfComponent.registrationForm.value.cantonese == true){
      this.languages.push(3);
    }
    if(this.mfComponent.registrationForm.value.spanish == true){
      this.languages.push(4);
    }


    delete this.mfComponent.registrationForm.value.english;
    delete this.mfComponent.registrationForm.value.mandrin;
    delete this.mfComponent.registrationForm.value.cantonese;
    delete this.mfComponent.registrationForm.value.spanish;
    this.mfComponent.registrationForm.value.languages = this.languages;
    console.log(this.mfComponent.registrationForm.value);
  }

}
