import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TeachersService } from './teachers.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalUpdateComponent } from './body/modal-update/modal-update.component';
import { ModalDeleteComponent } from './body/modal-delete/modal-delete.component';
import { ModalUpdateFormComponent } from './body/modal-update/modal-update-form/modal-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderFormatPipe } from '../assets/shared/pipes/gender-format.pipe';
import { IdType } from './id-type.enum';
import { WeekFormatPipe } from '../assets/shared/pipes/week-format.pipe';
import { OrgFormatPipe } from '../assets/shared/pipes/org-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ModalUpdateComponent,
    ModalDeleteComponent,
    ModalUpdateFormComponent,
    GenderFormatPipe,
    WeekFormatPipe,
    OrgFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    ModalUpdateComponent,
    ModalDeleteComponent
  ],
  providers: [TeachersService,
  Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
