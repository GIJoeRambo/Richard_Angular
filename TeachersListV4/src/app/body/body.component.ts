import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  private teachersList:any;
  private teachersListLength:number;
  private temTeachersList:any;
  private temTeachersListLength:number;
  private temPaginationTeacher = [];
  private page:number = 1;
  private pageSize = 10;


  constructor(private teachersService:TeachersService,private modalService:NgbModal) { }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe((data) =>
    {
      this.teachersList = data.Data;
      //console.log(data)
      // console.log(this.teachersList);
      this.teachersListLength = data.Data.length; //length prop is under Data prop
      this.temTeachersList = data.Data;
      this.temTeachersListLength = data.Data.length;
    },
    (error) => {console.log(error)})

    //this.update('aa',"aa");
  }

  //pagination method
  pagination(e){
    //reset to initial state
    //动了就bug
    this.temPaginationTeacher = [];
    this.teachersList = this.temTeachersList;
    this.teachersListLength = this.temTeachersListLength;
    //动了就bug
    for(let i of this.teachersList){
      if(((i['FirstName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1 || ((i['LastName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1){
          this.temPaginationTeacher.push(i)
        }
      }
    this.teachersList = this.temPaginationTeacher;
    this.teachersListLength = this.temPaginationTeacher.length;
  }

  update(command,witchTeacher){
    const modalRef = this.modalService.open(ModalUpdateComponent,{size:'lg'})
    if(command == "Edit"){
      modalRef.componentInstance.command = 'Edit';
    }
    if(command == "Add"){
      modalRef.componentInstance.command = "Add";
    }

    modalRef.componentInstance.witchTeacher = witchTeacher;
  }

  delete(command,witchTeacher){
    const modalRef = this.modalService.open(ModalDeleteComponent)
    modalRef.componentInstance.command = 'Delete';
    modalRef.componentInstance.witchTeacher = witchTeacher;
    
  }

  showDetail(command,witchTeacher){
    const modalRef = this.modalService.open(ModalUpdateComponent,{size:'lg'})
    modalRef.componentInstance.command = 'Detail';
    modalRef.componentInstance.witchTeacher = witchTeacher;
  }


}
