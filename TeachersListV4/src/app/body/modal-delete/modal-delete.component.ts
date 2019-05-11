import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Command } from 'protractor';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  //不接收变量的话 在html可以使用 但是不能在ts文件下使用
  @Input() command;
  @Input() witchTeacher;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }


  delete(){
    console.log(this.witchTeacher.TeacherId)
  }

}
