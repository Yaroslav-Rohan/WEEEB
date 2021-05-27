import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  id = localStorage.getItem('id');


  user_id: string;
  auditorium_id: string;
  booking_date_start: string;
  booking_date_final: string;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  createTransaction(User_id, Auditorium_id, Booking_date_start, Booking_date_final): boolean {
    this.user_id = User_id.value;
    this.auditorium_id = Auditorium_id.value;
    this.booking_date_start = Booking_date_start.value;
    this.booking_date_final = Booking_date_final.value;

    this.http.post(this.baseURL+ 'booking'  , null, {
        params: {
          user_id: this.user_id,
          auditorium_id: this.auditorium_id,
          booking_date_start: this.booking_date_start,
          booking_date_final: this.booking_date_final
        },
        observe: 'response'
      })
         .subscribe(response => {
        this.router.navigate(['/bookings']);
      });

      return false;
  }
  logout(): void {
    localStorage.setItem('id', null);
    this.router.navigate(['/']);
  }
}
