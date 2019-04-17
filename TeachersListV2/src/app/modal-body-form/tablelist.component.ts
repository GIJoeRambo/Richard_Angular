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

  //inputObj保存#dis标记的input标签
  @ViewChildren('dis') inputObj:any;

  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    //if Detail, input label disabled(can not modify)
    if (this.title == 'Detail'){
      this.disabledFlag = true;
    }
    //if Edit, can modify
    if (this.title == 'Edit'){
      this.disabledFlag = false;
    } 

    //if teachersObj is undefined(Add mode does not pass the teachers data)
    if (this.teachersObj == undefined){
      this.groupObj = {
        name:[''],
        dob:[''],
        gender:[''],
        email:[''],
        mobilePhone:[''],
        homePhone:[''],
        idType:[''],
        idNumber:[''],
        expired:[''],
        irdNumber:['']
      };
    }
    //Detail, Edit mode, parent component pass the teachers data
    else{
      this.groupObj = {
        name:[this.teachersObj.firstName + ' ' + this.teachersObj.lastName || ''],
        dob:[this.teachersObj.dob || ''],
        gender:[this.teachersObj.gender || ''],
        email:[this.teachersObj.email || ''],
        mobilePhone:[this.teachersObj.mobilePhone ||''],
        homePhone:[this.teachersObj.homePhone || ''],
        idType:[this.teachersObj.idType || ''],
        idNumber:[this.teachersObj.idNumber || ''],
        expired:[this.teachersObj.expiredDate || ''],
        irdNumber:[this.teachersObj.irdNumber || '']
      }
    }

    this.registrationForm=this.fb.group(this.groupObj)
    //初始化数据的代码一定要放在ngOnInit里面 否则数据显示不出来
    //???????????????????????????????????跟database数据检查?????????????????????????????????????????????????????
    
  }

  /* 
    当View渲染完成时 执行
  */
  ngAfterViewInit(){
    //inputObj是一个集合 inputObj._result是每个input标签
    for(let i of this.inputObj._results){
      i.nativeElement.disabled= this.disabledFlag;
    }
    //console.log('adasda',this.inputObj)
  }
}
