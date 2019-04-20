import { TeachersService } from './../teachers.service';
import { ContentComponent } from './../content/content.component';
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
  private content:ContentComponent;
  private qualifications;
  private datas;
  private languages;
  private orgs;
  private temLan;

 
  @Input() public teachersObj;
  @Input() title;

  //inputObj保存#dis标记的input标签
  @ViewChildren('dis') inputObj:any;

  constructor(private fb:FormBuilder,private teachersService:TeachersService) { 

  }


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
        firstName:[''],
        lastName:[''],
        dob:[''],
        qualifications:[''],
        gender:[''],
        email:[''],
        mobilePhone:[''],
        homePhone:[''],
        idType:[''],
        idNumber:[''],
        expired:[''],
        irdNumber:[''],
        languages:[''],
        mon:[''],
        tue:[''],
        wed:[''],
        thu:[''],
        fri:[''],
        sat:['']
      };
    }
    //Detail, Edit mode, parent component pass the teachers data
    else{
      this.groupObj = {
        firstName:[this.teachersObj.firstName || ''],
        lastName:[this.teachersObj.lastName || ''],
        dob:[this.teachersObj.dob || ''],
        qualifications:[this.teachersObj.qualifications || ''],
        gender:[this.teachersObj.gender || ''],
        email:[this.teachersObj.email || ''],
        mobilePhone:[this.teachersObj.mobilePhone ||''],
        homePhone:[this.teachersObj.homePhone || ''],
        idType:[this.teachersObj.idType || ''],
        idNumber:[this.teachersObj.idNumber || ''],
        expired:[this.teachersObj.expiredDate || ''],
        irdNumber:[this.teachersObj.irdNumber || ''],
        languages:[this.languagesFormat() || ''],
        mon:[''],
        tue:[''],
        wed:[''],
        thu:[''],
        fri:[''],
        sat:['']
      }
    }

    this.registrationForm=this.fb.group(this.groupObj)
    //初始化数据的代码一定要放在ngOnInit里面 否则数据显示不出来
    //???????????????????????????????????跟database数据检查?????????????????????????????????????????????????????

    //get datas
    this.teachersService.getApi().subscribe((data) =>
    {
      this.datas = data;
      console.log(this.datas)
      this.languages = this.datas.Data.Languages;
      //console.log('Languages',this.languages)
      this.qualifications = this.datas.Data.qualifications;
      this.orgs = this.datas.Data.Orgs;
      //console.log('Orgs',this.orgs)
    },
    (error) =>{console.log(error)});
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

  languagesFormat(){
    if(this.teachersObj.languages == undefined){
      return null;
    }
    else{
      this.temLan = [];
      for(let i of this.teachersObj.languages){
        this.temLan.push('  '+i);
      }
      return this.temLan;
    }
  }
}
