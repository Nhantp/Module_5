import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  name: string;
  email: string;
  cmndNumber: number;
  customerType: CustomerType;
  dateOfBirthday: string;
  phoneNumber: string;
  address: string;
}
