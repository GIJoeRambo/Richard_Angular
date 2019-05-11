import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  public requestFlag:boolean ;
  public tutorToDelete:number;

  constructor() { }

  sendRefreshRequest(tutorId){
    this.requestFlag = true;
    this.tutorToDelete = tutorId;
  }

  getRefreshRequest(){
    let requestFlagToReturn = this.requestFlag;
    this.requestFlag = false;
    return [requestFlagToReturn,this.tutorToDelete];

  }
}
