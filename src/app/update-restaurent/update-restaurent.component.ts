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
  // tslint:disable-next-line: no-inferrable-types
  alert: boolean = false;
  editRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });
  updateRestaurent: any;

  constructor(
    private resto: CommonService, private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      this.editRestaurent = new FormGroup({
        // tslint:disable-next-line: no-string-literal
        name: new FormControl(result['name']),
        // tslint:disable-next-line: no-string-literal
        Adress: new FormControl(result['Adress']),
        // tslint:disable-next-line: no-string-literal
        mobile: new FormControl(result['mobile']),
        // tslint:disable-next-line: no-string-literal
        email: new FormControl(result['email'])
      });
    });
  }
  // tslint:disable-next-line: typedef
  updateResto() {
    console.log(this.router.snapshot.params.id);
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurent.value).subscribe((result) => {
      // tslint:disable-next-line: quotemark
      console.log(result, "data update successfully");
      this.alert = true;
      this.editRestaurent = new FormGroup({
        // tslint:disable-next-line: no-string-literal
        name: new FormControl(result['name']),
        // tslint:disable-next-line: no-string-literal
        Adress: new FormControl(result['Adress']),
        // tslint:disable-next-line: no-string-literal
        mobile: new FormControl(result['mobile']),
        // tslint:disable-next-line: no-string-literal
        email: new FormControl(result['email']),
      });
    });
  }
  // tslint:disable-next-line: typedef
  closeAlert() {
    this.alert = false;
  }
}
