import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http:HttpClient) { }

  private url:string = "/assets/data/teachers.json";

  getTeachers(){
    return this.http.get(this.url);
  }

  // postTeachers(datas){
  //   this.http.post(this.url,datas).subscribe();
  // }

}
