import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teacher-detail-modal',
  templateUrl: './teacher-detail-modal.component.html',
  styleUrls: ['./teacher-detail-modal.component.css']
})
export class TeacherDetailModalComponent implements OnInit {
  public a = [{},{},{},{},{},{},{},{}]
  @Input() command;
  @Input() whichTeacher;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
