import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-languages-icon',
  templateUrl: './languages-icon.component.html',
  styleUrls: ['./languages-icon.component.css']
})
export class LanguagesIconComponent implements OnInit {
  @Input() public parentData_lan;
  private lan1 ='';
  private lan2 ='';
  private lanRest ='';
  private showLanRest = 'More...'
  private clickFlag = false;
  private lanLength:number = null;


  constructor() { }

  ngOnInit() {
    if(this.parentData_lan == undefined){
      return;
    }
    else{
      if(this.parentData_lan.length == 1){
        this.lanLength = 1;
      }
      else if(this.parentData_lan.length ==2){
        this.lanLength = 2;
      }
      else{
        this.lanLength = -1;
      }
      let [lan1,lan2,lan3,...lanRest] = this.parentData_lan;
      this.lan1 = lan1;
      this.lan2 = lan2;
      this.lanRest = lanRest;
    }
    console.log(this.lanRest)
  }

  showMore(){
    if(this.clickFlag == false){
      this.showLanRest = this.lanRest;
      this.clickFlag = true;
    }
    else{
      this.showLanRest = 'More...';
      this.clickFlag = false;
    }
    
  }
}
