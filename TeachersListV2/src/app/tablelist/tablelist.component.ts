import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  public registrationForm;
  private disabledFlag:boolean = false;
  private groupObj:any;
 
  @Input() public teachersObj;
  @Input() title;

  @ViewChildren('dis') inputObj:any;

  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    if (this.title == 'Detail'){
      this.disabledFlag = true;
  
    }
    if (this.title == 'Edit'){
      this.disabledFlag = false;
    } 

    console.log(this.teachersObj)
    if (this.teachersObj == undefined){
      this.groupObj = {
        dob:[''],
        gender:[''],
        email:[''],
        mobilePhone:[''],
        homePhone:[''],
        idType:[''],
        idNumber:[''],
        expired:['']
      };
    }
    else{
      this.groupObj = {
        dob:[this.teachersObj.dob || ''],
        gender:[this.teachersObj.gender || ''],
        email:[this.teachersObj.email || ''],
        mobilePhone:[this.teachersObj.mobilePhone ||''],
        homePhone:[this.teachersObj.homePhone || ''],
        idType:[this.teachersObj.idType || ''],
        idNumber:[this.teachersObj.idNumber || ''],
        expired:[this.teachersObj.expiredDate || '']
      }
    }

    this.registrationForm=this.fb.group(this.groupObj)
    //初始化数据的代码一定要放在ngOnInit里面 否则数据显示不出来
    //???????????????????????????????????跟database数据检查?????????????????????????????????????????????????????
    
  }

  ngAfterViewInit(){
    
    for(let i of this.inputObj._results){
      i.nativeElement.disabled= this.disabledFlag;
    }
    
       console.log(this.inputObj._results) 
    
  }
}
