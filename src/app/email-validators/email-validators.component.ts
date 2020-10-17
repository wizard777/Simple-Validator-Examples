import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-validators',
  templateUrl: './email-validators.component.html',
  styleUrls: ['./email-validators.component.scss']
})
export class EmailValidatorsComponent implements OnInit {

  title = 'email validator';

  nome = new FormControl('', [

  ]);

  userEmail = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),

  });

  // tslint:disable-next-line:typedef
  get primaryEmail() {
    return this.userEmail.get('primaryEmail');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onReset(): void {
    this.userEmail.reset();
  }

}
