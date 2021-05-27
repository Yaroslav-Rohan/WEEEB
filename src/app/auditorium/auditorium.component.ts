import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent implements OnInit {
  name: string;
  description: string;
  baseURL = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  createauditorium(name, description): boolean {
      this.name = name.value;
      this.description = description.value;
      this.http.post(this.baseURL+'auditorium', null, {
        params: {
          name: this.name,
          description: this.description
        },
        observe: 'response'
      })
         .subscribe(response => {
        this.router.navigate(['/auditoriums']);
      });

      name.value = '';
      description.value = '';
      return false;
  }

  logout(): void {
    localStorage.setItem('id', null);
    this.router.navigate(['/']);
  }
}
