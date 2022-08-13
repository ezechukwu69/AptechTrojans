import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    userName: ['', Validators.required],
  });
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    console.log('Hello');
    localStorage.setItem('userName', this.form.value.userName ?? '');
    this.router.navigate(['dashboard']);
  }
}
