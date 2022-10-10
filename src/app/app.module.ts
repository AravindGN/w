import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { BodyComponent } from './body/body.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateDetailsComponent } from './create-details/create-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    BodyComponent,
    StudentDetailsComponent,
    CreateDetailsComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
