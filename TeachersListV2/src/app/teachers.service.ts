import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeacher } from './teachers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private url:string = "/assets/data/teachers.json";

  constructor(private http:HttpClient) { }

  getTeachers():Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(this.url);
  }
}
