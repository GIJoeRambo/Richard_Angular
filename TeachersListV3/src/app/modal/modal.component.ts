import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() command;
  @Input() teacher;

  @ViewChild('MFComponent') mfComponent;

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.mfComponent.registrationForm.value);
  }

}
