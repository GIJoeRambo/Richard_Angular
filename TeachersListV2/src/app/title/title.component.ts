import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit() {
  }

  open(){
    const modalRef = this.modalService.open(PopupComponent,{size:'lg'});
    modalRef.componentInstance.title ='Add';
    modalRef.componentInstance.teachersObj = '';
  }
}
