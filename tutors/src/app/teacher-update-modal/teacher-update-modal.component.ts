import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teacher-update-modal',
  templateUrl: './teacher-update-modal.component.html',
  styleUrls: ['./teacher-update-modal.component.css']
})
export class TeacherUpdateModalComponent implements OnInit {

  @Input() command;
  @Input() whichTeacher;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
