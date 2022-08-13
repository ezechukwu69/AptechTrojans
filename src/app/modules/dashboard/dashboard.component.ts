import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    let data = localStorage.getItem('userName');
    this.user = data ?? '';
    if (!data) {
      this.router.navigate(['']);
    }
  }

  logout() {
    let data = localStorage.clear();
    this.router.navigate(['']);
  }
}
