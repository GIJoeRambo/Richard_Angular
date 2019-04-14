import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http:HttpClient) { }

<<<<<<< HEAD
  private url:string = "/assets/data/teachers.json";
=======
  private url:string = '/assets/data/teachers.json';
>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff

  getTeachers(){
    return this.http.get(this.url);
  }
<<<<<<< HEAD

  // postTeachers(datas){
  //   this.http.post(this.url,datas).subscribe();
  // }

=======
>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff
}
