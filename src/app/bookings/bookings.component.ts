import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-transactions',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

id = localStorage.getItem('id');
bookings: any = [];

list$: Subject<any[]>;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.showBookings();
  }



  showBookings(): void {
    this.http.get(this.baseURL + 'bookings' )
      .pipe(
        tap(bookings => console.log("bookings array", bookings))
      )
      .subscribe(response => this.bookings = response)
  }

  logout(): void {
    localStorage.setItem('id', null);
    this.router.navigate(['/']);
  }

}
