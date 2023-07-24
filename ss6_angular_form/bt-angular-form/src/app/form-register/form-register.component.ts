import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class  FormRegisterComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreate = new EventEmitter<FormRegisterComponent>();
  rfRegister: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfRegister = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    });
  }

  // addPerson(email: string, password: string, confirmPassword: string, country: string, age: string, gender: string, phone: string) {
  //   this.register = {
  //
  //     email,
  //     password,
  //     confirmPassword,
  //     country,
  //     age: +age,
  //     gender,
  //     phone: +phone
  //   };
  // }
}
