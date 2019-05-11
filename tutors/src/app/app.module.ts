import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { TeachersService } from 'src/service/teachers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherDeleteModalComponent } from './teacher-delete-modal/teacher-delete-modal.component';
import { CommandFormatPipe } from '../pipe/command-format.pipe';
import { TeacherUpdateModalComponent } from './teacher-update-modal/teacher-update-modal.component';
import { TeacherDetailModalComponent } from './teacher-detail-modal/teacher-detail-modal.component';
import { TeacherModalFormComponent } from './teacher-modal-form/teacher-modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeacherInfoComponent,
    TeacherDeleteModalComponent,
    CommandFormatPipe,
    TeacherUpdateModalComponent,
    TeacherDetailModalComponent,
    TeacherModalFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    TeacherDeleteModalComponent,
    TeacherDetailModalComponent,
    TeacherUpdateModalComponent
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
