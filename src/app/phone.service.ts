import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phoneUrl = 'assets/data/smartphone.json';


  constructor() { }

  // getPhone() {
  //   return this.http.get(this.configUrl);
  // }
}


