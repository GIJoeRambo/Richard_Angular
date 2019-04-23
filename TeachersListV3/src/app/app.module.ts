import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TeachersService } from './teachers.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenderFormatPipe } from './gender-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ModalComponent,
    ModalFormComponent,
    GenderFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
