import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  alert: boolean = false;
  createUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  regUser() {
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result) => {
      // tslint:disable-next-line: quotemark
      console.log(result, "data created successfully");
    });
  }

}
