import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert = false;
  editRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });
  updateRestaurent: any;

  constructor(private resto: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      console.log();
    }
    );
  }
  // tslint:disable-next-line: typedef
  createResto() {
    this.resto.addResto(this.updateRestaurent.value).subscribe((result) => {
      this.alert = true;
      this.updateRestaurent.reset({});
      console.log('Get Data from Service', result);
    }
    );
    // console.log(this.addRestaurent.value)
  }
  // tslint:disable-next-line: typedef
  closeAlert() {
    this.alert = false;
  }
}
