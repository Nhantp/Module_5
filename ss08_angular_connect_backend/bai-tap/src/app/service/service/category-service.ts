import {Injectable} from '@angular/core';
import {Category} from '../../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API = 'http://localhost:3001/categories';

  constructor( private http: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API);
  }
}
