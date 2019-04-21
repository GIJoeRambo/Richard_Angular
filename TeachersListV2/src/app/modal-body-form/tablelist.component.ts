import { TeachersService } from './../teachers.service';
import { ContentComponent } from './../content/content.component';
import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { checkNoChangesView } from '@angular/core/src/view/view';



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
  @Input() instruction;

  //inputObj保存#dis标记的input标签
  @ViewChildren('dis') inputObj:any;
  @ViewChild('date') dateObj:any;

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
        mon:['' || 'Not Avaliable'],
        tue:['' || 'Not Avaliable'],
        wed:['' || 'Not Avaliable'],
        thu:['' || 'Not Avaliable'],
        fri:['' || 'Not Avaliable'],
        sat:['' || 'Not Avaliable']
      }
    }

    this.registrationForm=this.fb.group(this.groupObj)
    //初始化数据的代码一定要放在ngOnInit里面 否则数据显示不出来
    //???????????????????????????????????跟database数据检查?????????????????????????????????????????????????????

    //get datas
    this.teachersService.getApi().subscribe((data) =>
    {
      this.datas = data;
      //console.log(this.datas)
      this.languages = this.datas.Data.Languages;
      //console.log('Languages',this.languages)
      this.qualifications = this.datas.Data.qualifications;
      console.log(this.qualifications)
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

  //当button指令发生变化时 
  ngOnChanges(){
    //提交表单指令
    if(this.instruction == 'save'){
      console.log('woco')
      this.submit();
    }
    if(this.instruction =='delete'){
      this.delete();
    }
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

  expiredDisabled(e){
    if(e.target.value =='driverLicense'){
      this.dateObj.nativeElement.disabled = true;
      this.dateObj.nativeElement.type = 'text';
    }
    else{
      this.dateObj.nativeElement.disabled = false;
      this.dateObj.nativeElement.type = 'date';
    }

  }

  a(e){
    console.log(e.target.value)
  }

  submit(){

  }

  delete(){

  }

}
