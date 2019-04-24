import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Command } from 'protractor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {


  @Input() command;
  @Input() witchTeacher;

  @ViewChild('modalUpdateFormComponent') modalUpdateFormComponentObj;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

  submit(){
    console.log('submit',this.modalUpdateFormComponentObj.updateForm.value)
  }

}
