import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  @Input() teachersObj;
  @Input() titles;
  constructor() { }

  ngOnInit() {
   
    console.log(this.titles)
  }

}
