import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeacher } from './teachers';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private url:string = "/assets/data/teachers.json";
  private teachersToPass;
  private apisToPass;

  constructor(private http:HttpClient) { 
    this.teachersToPass = this.http.get<ITeacher[]>(this.url);
    this.apisToPass = this.http.get<ITeacher[]>('http://192.168.178.76:5000/api/register/teacher');
  }

  getTeachers():Observable<ITeacher[]>{
    return this.teachersToPass;
  }

  getApi():Observable<ITeacher[]>{
    return this.apisToPass;
  }













  
    // getDataFromServer():Observable<any>{
    //   const parallel = Observable.forkJoin(
    //     this.http.get<ITeacher[]>('http://192.168.178.76:5000/api/register/getQualification'),
    //     this.http.get<ITeacher[]>('http://192.168.178.76:5000/api/register/getLanguage')
    //   )

    //   return parallel;
    // }
  
}
