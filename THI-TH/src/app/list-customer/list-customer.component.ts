import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer-service';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(
      (data: Customer[]) => {
        this.customers = data;
      });
  }

}
