import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TeachersService } from './teachers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    ContentComponent,
    PaginationComponent,
    TablelistComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }