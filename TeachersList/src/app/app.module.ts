import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { TeachersService } from './teachers.service'
=======
import { ListsComponent } from './lists/lists.component';
import { HttpClientModule } from '@angular/common/http';
import { TeachersService } from './teachers.service';
import { WeeksIconComponent } from './weeks-icon/weeks-icon.component';
import { LanguagesIconComponent } from './languages-icon/languages-icon.component';
import { PopupComponent } from './popup/popup.component';
import { ShellComponent } from './shell/shell.component';
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
=======
    ContentComponent,
    ListsComponent,
    WeeksIconComponent,
    LanguagesIconComponent,
    PopupComponent,
    ShellComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
>>>>>>> 813b645ea06e2119eea7c041df9f8d7235bd83ff
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
