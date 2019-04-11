import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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

}
