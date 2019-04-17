import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../modal/popup.component';
import { UpperCasePipe } from '@angular/common';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //init teachers para
  public teachers:any;
  //temp teachers para
  public teachersStore:any;
  //init length para 
  public length;
  //temp length para
  public lengthStore;
  public page:number = 1;
  public pageSize = 10;
  public temTeachers = [];

  constructor(private teachersService:TeachersService, private modalService:NgbModal) {
    
}

  ngOnInit() {
    this.teachersService.getTeachers()
        .subscribe((data) => {
          this.teachers = data;
          this.length = data.length;
          this.teachersStore = data;
          this.lengthStore = data.length;
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

  /*
    search event
  */
  change(e){
    //reset to initial state
    this.temTeachers = [];
    this.teachers = this.teachersStore;
    this.length = this.lengthStore;
    
    for(let i of this.teachers){
      if(((i['firstName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1 || ((i['lastName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1){
          this.temTeachers.push(i)
        }
      }
    this.teachers = this.temTeachers;
    this.length = this.temTeachers.length;
  }
  
}
