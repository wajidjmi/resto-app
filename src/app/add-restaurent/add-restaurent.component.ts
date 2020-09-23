import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
  alert = false;
  addRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  createResto() {
    this.resto.addResto(this.addRestaurent.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurent.reset({});
      console.log('Get Data from Service', result);
    }
    );
    // console.log(this.addRestaurent.value);
  }
  // tslint:disable-next-line: typedef
  closeAlert() {
    this.alert = false;
  }

}
