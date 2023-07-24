import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {
  }

  save(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.API, customer);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API);
  }
}
