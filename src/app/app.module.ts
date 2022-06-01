import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { EditSchoolComponent } from './components/edit-school/edit-school.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SchoolService } from './services/school.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateSchoolComponent,
    ListSchoolComponent,
    EditSchoolComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
