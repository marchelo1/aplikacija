import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // preuzimanje podataka
  getShoppingItems() {
    return this.http.get(`http://localhost:3000/api/items`)
      .map(res => res.json());
  }

  //dodavanje podataka
  addShoppingItem(newItem) {
    let headers = new Headers();
    headers.append(`Content-Type`, `application/json`);
    return this.http.post(`http://localhost:3000/api/item`, newItem, { headers: headers })
      .map(res => res.json());
  }
}
