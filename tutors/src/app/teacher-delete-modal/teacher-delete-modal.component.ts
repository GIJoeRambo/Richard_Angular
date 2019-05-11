import { TeachersService } from 'src/service/teachers.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RefreshService } from 'src/service/refresh.service';

@Component({
  selector: 'app-teacher-delete-modal',
  templateUrl: './teacher-delete-modal.component.html',
  styleUrls: ['./teacher-delete-modal.component.css']
})
export class TeacherDeleteModalComponent implements OnInit {
  //delete flag
  public isDeleteSuccess = false;
  public isDeleteFail = false;

  @Input() command;
  @Input() whichTeacher;

  constructor(public activeModal: NgbActiveModal,public teachersService:TeachersService,public refreshService: RefreshService) { }

  ngOnInit() {
  }

  delete(){
    let teacherId = this.whichTeacher.TeacherId;
    this.teachersService.deleteTeacher(teacherId).subscribe(
      (res) => {
        this.isDeleteSuccess = true;
        //成功信息
        this.refreshService.sendRefreshRequest(teacherId);
      },
      (err) => {
        //失败信息
        this.isDeleteFail = true;
        console.log('err',err)
      }
    );
  }

}
