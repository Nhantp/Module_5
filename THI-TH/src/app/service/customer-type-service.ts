import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {
  private API = 'http://localhost:3001/customerTypes';

  constructor(private http: HttpClient) {
  }

  getAllCustomerTypes(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API);
  }
}
