import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  public baseUrl ='http://45.76.123.59:5000/api/';

  constructor(private http: HttpClient) { }

  getTeachersInfo():any{
    return this.http.get(this.baseUrl + 'teacher');
  }

  deleteTeacher(teacherId):any{
    return this.http.delete(this.baseUrl + 'teacher/' + teacherId);
  }

  getDropdownOptions():any{
    return this.http.get(this.baseUrl + 'qualificationslanguagesorgs');
  }
}
