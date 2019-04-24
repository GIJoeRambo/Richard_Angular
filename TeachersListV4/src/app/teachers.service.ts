import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private url:string = "http://35.197.183.118:5000/api/";
  private teachersObjFromService;
  private apisFromService;

  constructor(private http:HttpClient) { 
    this.teachersObjFromService = this.http.get(this.url +'teacher')
    this.apisFromService = this.http.get(this.url + 'qualificationslanguagesorgs')
    //this.teachersObjFromService = this.http.get("/assets/data/teachers.json")
  }


  getTeachers(){
    return this.teachersObjFromService;
  }

  getApis(){
    return this.apisFromService;
  }
}
