import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from '../registration/registration.component';
import {AuditoriumComponent} from '../auditorium/auditorium.component';
import {IndexComponent} from '../index/index.component';
import {AuditoriumsComponent} from '../auditoriums/auditoriums.component';
import {AboutComponent} from '../about/about.component';
import {BookingsComponent} from '../bookings/bookings.component';
import {CreateBookingComponent} from '../create-booking/create-booking.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'auditorium',
    component: AuditoriumComponent,
  },
  {
    path: 'auditoriums',
    component: AuditoriumsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'booking',
    component: CreateBookingComponent,
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
