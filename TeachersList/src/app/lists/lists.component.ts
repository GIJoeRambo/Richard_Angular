import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TeachersService } from '../teachers.service';
import { getLocaleWeekEndRange } from '@angular/common';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  private teachers:any = [];
  private week:any = [];

  @Output() public childEvent = new EventEmitter();
  @Output() public iEvent = new EventEmitter();
 
  constructor(private teachersService:TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachers()
                        .subscribe(data => this.teachers = data);
  }

  update(i){
    
    this.childEvent.emit('update');
    this.iEvent.emit(i);

  }
}
