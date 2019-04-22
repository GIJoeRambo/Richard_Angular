import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class TeachersService {
  private teachersUrl:string = "/assets/data/teachers.json";
  private serverUrl:string = 'http://35.197.183.118:5000/api/register/teacher'
  private teachersListFormService;
  private apisFromService;

  constructor(private http:HttpClient) { 
    this.teachersListFormService = this.http.get(this.teachersUrl);
    this.apisFromService = this.http.get(this.serverUrl);
  }

  getTeachersList(){
    return this.teachersListFormService;
  }
  getApi(){
    return this.apisFromService;
  }

}
