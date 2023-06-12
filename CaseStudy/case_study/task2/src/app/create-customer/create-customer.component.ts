import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreate = new EventEmitter<CreateCustomerComponent>();
  customerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        customerType: new FormControl(),
        cmndNumber: new FormControl(),
        dateOfBirthday: new FormControl(),
        phoneNumber: new FormControl(),
        address: new FormControl()
      }
    );
  }
}
