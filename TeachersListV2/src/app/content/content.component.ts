import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public teachers:any;
  public length;
  public page:number = 1;
  public pageSize = 10;

  constructor(private teachersService:TeachersService, private modalService:NgbModal) {
}

  ngOnInit() {
    this.teachersService.getTeachers()
        .subscribe((data) => {
          this.teachers = data;
          this.length = data.length;
      },
        (error) =>{console.log(error)})
    }

  open(command,teachersObj){
    const modalRef = this.modalService.open(PopupComponent,{size:'lg'});
    if (command == 'Detail'){
      modalRef.componentInstance.title ='Detail';
    }
    if (command =='Edit'){
      modalRef.componentInstance.title ='Edit';
    }
    if (command =='Delete'){
      modalRef.componentInstance.title ='Delete';
    }
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.teachersObj = teachersObj;
  }

  
}
