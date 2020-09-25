import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = 'http://localhost:3000/resto';
  regURL = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,

  ) { }

  // tslint:disable-next-line: typedef
  getRestoList() {
    return this.http.get(this.URL);
  }
  // tslint:disable-next-line: typedef
  addResto(data) {
    return this.http.post(this.URL, data);
  }
  // tslint:disable-next-line: typedef
  deleteResto(id) {
    return this.http.delete(`${this.URL}/${id}`);
  }
  // tslint:disable-next-line: typedef
  getCurrentData(id) {
    return this.http.get(`${this.URL}/${id}`);
  }
  // tslint:disable-next-line: typedef
  updateResto(id, data) {
    return this.http.get(`${this.URL}/${id}`, data);
  }

  // tslint:disable-next-line: typedef
  createUser(data) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.regURL , data);
  }

}
