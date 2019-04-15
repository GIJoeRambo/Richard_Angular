import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public teachers:any;
  public length;
  public page:number = 1;
  public pageSize = 5;

  constructor(private teachersService:TeachersService) {
}

  ngOnInit() {
    this.teachersService.getTeachers()
        .subscribe((data) => {
          this.teachers = data;
          this.length = data.length;
      },
        (error) =>{console.log(error)})
    }
  
}
