import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private teachersList:any;
  private teachersListLength:number;
  private temTeachersList:any;
  private temTeachersListLength:number;
  private temPaginationTeacher = [];
  private page:number = 1;
  private pageSize = 10;


  constructor(private teachersService:TeachersService, private modalService:NgbModal) { }

  ngOnInit() {
    //subscribe teachers
    this.teachersService.getTeachersList().subscribe((data) =>
    {
      this.teachersList = data;
      this.teachersListLength = data.length;
      this.temTeachersList = data;
      this.temTeachersListLength = data.length;
    },
    (error) => {console.log(error)})
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
      if(((i['firstName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1 || ((i['lastName'].toLowerCase()).search(e.target.value.toLowerCase())) !== -1){
          this.temPaginationTeacher.push(i)
        }
      }
    this.teachersList = this.temPaginationTeacher;
    this.teachersListLength = this.temPaginationTeacher.length;
  }

  //pop up modals method
  popUpModal(command,teacher){
    const modalRef = this.modalService.open(ModalComponent,{size:'lg'});
    if (command == 'Detail'){
      modalRef.componentInstance.command ='Detail';
    }
    if (command =='Edit'){
      modalRef.componentInstance.command ='Edit';
    }
    if (command =='Delete'){
      modalRef.componentInstance.command ='Delete';
    }
    if (command =='Add'){
      modalRef.componentInstance.command ='Add';
    }
    //modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.teacher = teacher;
  }
}
