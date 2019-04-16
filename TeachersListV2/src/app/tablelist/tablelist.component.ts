import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  private disabledFlag:boolean = false;
  @Input() title;
  constructor(private fb:FormBuilder) { }


  ngOnInit() {
   if (this.title == 'Detail'){
     this.disabledFlag = true;
   } 
  }

  registrationForm=this.fb.group({
    dob:['XXXXX'],
    gender:['xx'],
    email:['xxxxx@xxxxxxx.com']
  })

}
