import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreate = new EventEmitter<CreateEmployeeComponent>();
  employeeForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      location: new FormControl(),
      level: new FormControl(),
      department: new FormControl(),
      cmndNumber: new FormControl(),
      dateOfBirthday: new FormControl(),
      phoneNumber: new FormControl(),
      address: new FormControl()
    });
  }

}
