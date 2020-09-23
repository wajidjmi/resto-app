import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = 'http://localhost:3000/resto';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRestoList() {
    return this.http.get(this.URL);
  }
  // tslint:disable-next-line: typedef
  addResto(data) {
    return this.http.post(this.URL, data);
  }
  // tslint:disable-next-line: typedef
  getCurrentData(id) {
    return this.http.get(this.URL, id);
  }
}
