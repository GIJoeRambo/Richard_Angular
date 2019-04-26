import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TeachersService } from './teachers.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ModalUpdateFormComponent } from './modal-update-form/modal-update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderFormatPipe } from './gender-format.pipe';
import { IdType } from './id-type.enum';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ModalUpdateComponent,
    ModalDeleteComponent,
    ModalUpdateFormComponent,
    GenderFormatPipe
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
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
