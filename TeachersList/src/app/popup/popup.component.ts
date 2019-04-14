import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() public teacher;
  public registrationForm;
  private firstName = '1';
  constructor(private fb:FormBuilder) { 
  }


  @Output() public childEvent2 = new EventEmitter();
  ngOnInit() {
    this.registrationForm = this.fb.group({
    firstName:[this.teacher.firstName ||''],
    lastName:[this.teacher.lastName ||''],
    gender:[this.teacher.gender ||''],
    irdNumber:[this.teacher.irdNumber ||''],
    idType:[this.teacher.idType ||''],
    idNumber:[this.teacher.idNumber ||''],
    expiredDate:[this.teacher.expiredDate ||''],
    mobilePhone:[this.teacher.mobilePhone ||''],
    homePhone:[this.teacher.homePhone ||''],
    email:[this.teacher.email ||''],
    qualification:[this.teacher.qualification ||''],
    languages:[this.teacher.languages ||'']
  })
}

  closed(){
  this.childEvent2.emit('');
  }
}