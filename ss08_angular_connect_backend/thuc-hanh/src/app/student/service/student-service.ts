import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API = 'http://localhost:3000/students';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API);
  }

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API, student);
  }
}
