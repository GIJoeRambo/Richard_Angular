import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TeachersService } from './teachers.service';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { ShowListComponent } from './show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    ContentComponent,
    TablelistComponent,
    PopupComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    PopupComponent
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
