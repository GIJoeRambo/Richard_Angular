import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { Command } from 'protractor';
import { TeachersService } from '../teachers.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  private registrationForm;
  private groupObj;
  private disabledFlag:boolean = false;
  private qualifications;
  private datas;
  private languages;
  private orgs;
  private temLan;
  private ifEnglishChecked:boolean = false;
  private eng = false;
  private ifMandrinChecked:boolean = false;
  private mand = false;
  private ifCantoneseChecked:boolean = false;
  private canton = false;
  private ifSpanishChecked:boolean = false;
  private spanish = false;

  @Input() command;
  @Input() teacher;

  @ViewChildren('dis') inputObj:any;
  @ViewChild('date') dateObj:any;


  constructor(private fb:FormBuilder, private teachersService:TeachersService) { }

  ngOnInit() {
    //if Detail, input label disabled(can not modify)
    if (this.command == 'Detail'){
      this.disabledFlag = true;
    }
    //if Edit, can modify
    if (this.command == 'Edit'){
      this.disabledFlag = false;
    } 
  
    if (this.teacher == undefined){
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
        english:[''],
        mandrin:[''],
        cantonese:[''],
        spanish:[''],
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
      for(let i in this.teacher.languages){
        //console.log(this.teacher.languages[i])
        if(this.teacher.languages[i] == 1){
          this.ifEnglishChecked = true;
          this.eng = true;
        }
        else if(this.teacher.languages[i] == 2){
          this.ifMandrinChecked = true;
          this.mand = true;
        }
        else if(this.teacher.languages[i] == 3){
          this.ifCantoneseChecked = true;  
          this.canton = true; 
        }
        else if(this.teacher.languages[i] == 4){
          this.ifSpanishChecked = true;
          this.spanish = true;
        }
      }
      this.groupObj = {
        firstName:[this.teacher.FirstName || ''],
        lastName:[this.teacher.LastName || ''],
        dob:[this.teacher.Dob || ''],
        qualifications:[this.teacher.Qualifications || ''],
        gender:[this.genderFormat() || ''],
        email:[this.teacher.Email || ''],
        mobilePhone:[this.teacher.MobilePhone ||''],
        homePhone:[this.teacher.HomePhone || ''],
        idType:[this.teacher.IdType || ''],
        idNumber:[this.teacher.IdNumber || ''],
        expired:[this.teacher.ExpiredDate || ''],
        irdNumber:[this.teacher.IrdNumber || ''],
        languages:['' || ''],
        english:[this.eng ||''],
        mandrin:[this.mand || ''],
        cantonese:[this.canton ||''],
        spanish:[this.spanish ||''],
        mon:['' || 'Not Avaliable'],
        tue:['' || 'Not Avaliable'],
        wed:['' || 'Not Avaliable'],
        thu:['' || 'Not Avaliable'],
        fri:['' || 'Not Avaliable'],
        sat:['' || 'Not Avaliable']
      }
    }

    this.registrationForm=this.fb.group(this.groupObj)

    this.teachersService.getApi().subscribe((data) =>
    {
      this.datas = data;
      //console.log(this.datas)
      this.languages = this.datas.Data.Languages;
      //console.log('Languages',this.languages)
      this.qualifications = this.datas.Data.qualifications;
      //console.log(this.qualifications)
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

  genderFormat(){
    if(this.teacher.Gender == 0){
      return "Female"
    }
    if(this.teacher.Gender == 1){
      return "Male"
    }
  }


  a(e){
    
  }

}

