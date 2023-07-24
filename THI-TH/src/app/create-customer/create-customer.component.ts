import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer-service';
import {Customer} from '../model/customer';
import {Router} from '@angular/router';
import {CustomerTypeServiceService} from '../service/customer-type-service';
import {CustomerType} from '../model/customer-type';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = {
    id: 0,
    name: '',
    email: '',
    customerType: null,
    cmndNumber: 0,
    dateOfBirthday: '',
    phoneNumber: '',
    address: ''
  };
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
        id: new FormControl('', [Validators.pattern(/^\+'KH-'\d{4}$/)]),
        name: new FormControl('', [Validators.required]),
        email: new FormControl(),
        customerType: new FormControl(),
        cmndNumber: new FormControl(),
        dateOfBirthday: new FormControl(),
        phoneNumber: new FormControl(),
        address: new FormControl()
      }
    );
    this.getAllCustomerTypes();
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerTypes().subscribe(
      (data: CustomerType[]) => this.customerTypes = data);
  }

  save() {
    this.customerService.save(this.customer).subscribe(next =>
      this.router.navigateByUrl('customer/list'));
  }
}
