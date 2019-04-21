import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public tilteName:string;
  public instruction:string;
  @Input()name;
  @Input()title;
  @Input()parentData;
  @Input()teachersObj;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit() {
    
  }

  submit(){
    this.instruction = 'save';
  }

  

}
