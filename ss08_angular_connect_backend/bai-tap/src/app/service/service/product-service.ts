import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  save(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.API, product);
  }

  findProductById(product: Product): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }
}
