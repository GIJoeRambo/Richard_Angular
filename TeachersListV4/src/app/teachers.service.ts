import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private domainData = "./assets/data/teachers.json"
  private url:string = "http://45.76.123.59:5000/api/";
  private OliverIp:string = "http://192.168.178.76:5000/api/";
  private teachersObjFromService;
  private apisFromService;

  constructor(private http:HttpClient) { 
    //this.teachersObjFromService = this.http.get(this.domainData)
    this.teachersObjFromService = this.http.get(this.url +'teacher')
    this.apisFromService = this.http.get(this.url + 'qualificationslanguagesorgs')
   
  }


  getTeachers(){
    return this.teachersObjFromService;
  }

  getApis(){
    return this.apisFromService;
  }
}
