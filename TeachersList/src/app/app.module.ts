import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { TeachersService } from './teachers.service'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
