import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-wallets',
  templateUrl: './auditoriums.component.html',
  styleUrls: ['./auditoriums.component.css']
})
export class AuditoriumsComponent implements OnInit {
id = localStorage.getItem('id');
auditoriums: any = [];
list$: Subject<any[]>;
  name: string;
  description: string;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.showAuditoriums();
  }

  showAuditoriums(): void {
    this.http.get(this.baseURL + 'auditorium/list')
      .pipe(

        tap(auditoriums => console.log("auditorium array", auditoriums))
      )
      .subscribe(response => this.auditoriums = response)
  }


  logout(): void {
    localStorage.setItem('id', null);
    this.router.navigate(['/']);
  }

  edit(): void {
    this.router.navigate(['/user/' + localStorage.getItem('id') + '/edit']);
  }

  delete(): void {
    this.http.delete(this.baseURL + 'user/'+ localStorage.getItem('id'))
      .subscribe(response => {
        this.router.navigate(['/']);
        // console.log(response)
      });
  }
}
