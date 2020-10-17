import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { UsernameValidators } from './validators/username.validators';
import { PasswordValidator } from './validators/password.validators';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {



  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      UsernameValidators.cannotContainsSpace,
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(/[A-Z]/),
      // Validators.pattern(/\d/),
      Validators.minLength(8),
      PasswordValidator.hasUpper,
      PasswordValidator.hasNumber
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]\d*$/),
      // PhoneNumber.phoneNumber
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    )
  });


  // check the validity of form control
  // tslint:disable-next-line:typedef
  get username() {
    return this.userForm.get('username');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.userForm.get('password');
  }


  // tslint:disable-next-line:typedef
  get phone() {
    return this.userForm.get('phone');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.userForm.get('email');
  }

  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  get getForm() {
    return this.userForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {

    if (this.userForm.valid) {
      return;
    }
    alert('SUCCESS!!\n\n' + JSON.stringify(this.userForm.value, null, 4).toUpperCase());
  }

}
