import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AuditoriumComponent } from './auditorium/auditorium.component';
import { AuditoriumsComponent } from './auditoriums/auditoriums.component';
import { AboutComponent } from './about/about.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import {IndexComponent} from "./index/index.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuditoriumComponent,
    AuditoriumsComponent,
    AboutComponent,
    BookingsComponent,
    CreateBookingComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
