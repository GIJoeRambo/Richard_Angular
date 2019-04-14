import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weeks-icon',
  templateUrl: './weeks-icon.component.html',
  styleUrls: ['./weeks-icon.component.css']
})
export class WeeksIconComponent implements OnInit {
  @Input() public parentData_week;
  private monFlag = false;
  private tueFlag = false
  private wedFlag = false
  private thuFlag = false
  private friFlag = false
  private satFlag = false

 
  constructor() { }

  ngOnInit() {
    if(this.parentData_week == undefined){
      return;
    }
    else{
      for(let i of this.parentData_week){
        if(i == 'Mon'){
          this.monFlag = true;
        }
        if(i=='Tue'){
          this.tueFlag = true; 
        }
        if(i=='Wed'){
          this.wedFlag = true;
        }
        if(i=='Thu'){
          this.thuFlag = true;
        }
        if(i=='Fri'){
          this.friFlag = true;
        }
        if(i=='Sat'){
          this.satFlag = true;
        }
      } 
    }
  
  }


}
