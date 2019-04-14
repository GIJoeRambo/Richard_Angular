import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TeachersService } from '../teachers.service';
=======
>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
<<<<<<< HEAD
  public teachers:any = [];
  private data:any ={};
  private genderFlag = 'oo';

  constructor(private teachersService:TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachers()
                        .subscribe(data => this.teachers = data);
  }

  // update(){
  //   this.data = {"firstName":"Wang"};
  //   this.teachersService.postTeachers(this.data);
  // }

=======
  public message = '';
  public teacher =null;
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff
}
