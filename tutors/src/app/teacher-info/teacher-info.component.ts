import { TeacherDetailModalComponent } from './../teacher-detail-modal/teacher-detail-modal.component';
import { TeacherUpdateModalComponent } from './../teacher-update-modal/teacher-update-modal.component';
import { RefreshService } from '../../service/refresh.service';
import { TableService } from '../../service/table.service';
import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/service/teachers.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TeacherDeleteModalComponent } from '../teacher-delete-modal/teacher-delete-modal.component';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  //what columns showed in the info page, can get from back-end in the future.
  public columnsToShow: Array<string> = ['FirstName', 'LastName', 'Gender', 'MobilePhone', 'Email'];
  //teachers data from database
  public teachersList: Array<any>;
  //teachers list copy. Using in searching method, in order to initialize data to original
  public teachersListCopy: Array<any>;
  //how many datas in teachersList
  public teachersListLength: number; s
  //search by which columns 
  public columnsToSearch: Array<string> = [];
  public currentPage: number = 1;
  public pageSize: number = 10;

  constructor(private teachersService: TeachersService, private ngTable: TableService, private modalService: NgbModal, private refreshService: RefreshService) { }

  ngOnInit() {
    this.getDataFromSever();
  }

  /////////////////////////////////////////////data handlers/////////////////////////////////////////////////
  /*
    get data from service
  */
  getDataFromSever() {
    //this.toggleLoadingGif('show')  'show' 'hide'
    this.toggleLoadingGif('show');
    this.teachersService.getTeachersInfo().subscribe(
      (res) => {
        this.teachersList = res.Data;
        this.teachersListCopy = this.teachersList;
        this.teachersListLength = res.Data.length;
        console.log(this.teachersList)
        //this.toggleLoadingGif('show')  'show' 'hide'
        this.toggleLoadingGif('hide');
      },
      (err) => {
        //报错误信息
      }
    )
  }

  ///////////////////////////////////////////called by other methods//////////////////////////////////////////////

  toggleLoadingGif(command) {

  }



  ///////////////////////////////////////////called by template event/////////////////////////////////////////////
  /*
    Insert space before capital letter.
      eg: FirstName --> First Name 
  */
  AddSpaceInString(strToAdd) {
    return strToAdd.replace(/(?=[A-Z])/g, ' ');
  }

  /*
    let user decide in which column to search 
  */
  showSearchingSelection(event) {
    let dropDownObj = document.getElementById('t_info_search_by_btn');
    event.target.attributes.flag = !event.target.attributes.flag;

    if (event.target.attributes.flag == true) {
      let searchingInputObj = document.getElementById('searchingInput');
      searchingInputObj['value'] = null;
      dropDownObj.style.display = 'inline-block';
    }
    else {
      dropDownObj.style.display = 'none';
    }
  }

  /*
   let user decide in which column to search 
   handler of user's selection
 */
  showSelectStyle(event?) {
    event.target.attributes.flag = !event.target.attributes.flag;
    let attributes = event.target.attributes;
    if (attributes.flag == true) {
      //选中状态
      attributes.class.value = 't_selected'; //please keep class name as same as it in css file
      this.columnsToSearch.push(event.target.innerText);
    }
    else {
      //非选中状态
      attributes.class.value = '';
      this.columnsToSearch.splice(this.columnsToSearch.findIndex(i => i === event.target.innerText), 1)
    }
  }


  /*
    sort method
  */
  onSort(orderBy) {
    console.log(orderBy)
    this.ngTable.sorting(this.teachersList, orderBy);
  }

  onSearch(event) {
    if (this.columnsToSearch.length == 0) {
      return;
    }
    else {
      let searchString = event.target.value;
      this.teachersList = this.ngTable.searching(this.teachersListCopy, this.columnsToSearch, searchString);
      this.teachersListLength = this.teachersList.length;
    }
  }

  ///////////////////////////////////////handler of angular-bootstrap modals/////////////////////////////////////
  /*
    pop up modals, when need to pop up a modal, call this method
    commands:
      0 --> Add new
      1 --> show details/show more
      2 --> Edit/update
      3 --> delete
  */
  popUpModal(command, whichTeacher) {
    switch (command) {
      case 0:
        this.updateModal(command, whichTeacher);
        break;
      case 1:
        this.detailModal(command, whichTeacher)
        break;
      case 2:
        this.updateModal(command, whichTeacher);
        break;
      case 3:
        this.deleteModal(command, whichTeacher);
        break;
    }
  }

  /*
    update modal
  */
  updateModal(command, whichTeacher) {
    const modalRef = this.modalService.open(TeacherUpdateModalComponent, { size: 'lg' });
    let that = this;
    modalRef.result.then(that.refreshPage(that));
    modalRef.componentInstance.command = command;
    modalRef.componentInstance.whichTeacher = whichTeacher;
  }

  /*
    delete modal
  */
  deleteModal(command, whichTeacher) {
    const modalRef = this.modalService.open(TeacherDeleteModalComponent);
    let that = this;
    modalRef.result.then(that.refreshPage(that));
    modalRef.componentInstance.command = command;
    modalRef.componentInstance.whichTeacher = whichTeacher;
  }

  /*
    detail modal
  */
  detailModal(command, whichTeacher) {
    const modalRef = this.modalService.open(TeacherDetailModalComponent, { size: 'lg' });
    modalRef.componentInstance.command = command;
    modalRef.componentInstance.whichTeacher = whichTeacher;
  }

  /*
    After data modified(delete,add,update), refresh the page
  */
  refreshPage(pointer) {
    return function () {
      let refreshFlag, teacherToDelete;
      [refreshFlag, teacherToDelete] = pointer.refreshService.getRefreshRequest();
      if (refreshFlag == true) {
        //
        pointer.teachersList.forEach(function (current) {
          if (current.TeacherId === teacherToDelete) {
            pointer.teachersList.splice(pointer.teachersList.findIndex(i => i.TeacherId === teacherToDelete), 1)
            pointer.teachersListLength--;
          }
        })
      }
    }
  }


}
