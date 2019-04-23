import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

}
