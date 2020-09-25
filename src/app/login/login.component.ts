import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  // tslint:disable-next-line: no-inferrable-types
  alert: boolean = false;
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  logIn() {
    // tslint:disable-next-line: quotemark
    if (this.email === "admin@gmail.com" && this.password === "admin@123") {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate[('../list')];
    }
    else {
      alert('please enter valid details');
    }
  }
}
