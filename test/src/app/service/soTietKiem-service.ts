import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/so-tiet-kiem';

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemService {
  private API = ' http://localhost:3001/soTietKiem';

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.API);
  }

  findById(maSo: number): Observable<SoTietKiem> {
    return this.http.get<SoTietKiem>(this.API + '/' + maSo);
  }
  update(maSo: number, soTietKiem: SoTietKiem): Observable<SoTietKiem> {
    return this.http.put<SoTietKiem>(this.API + '/' + maSo, soTietKiem);
  }
  delete(maSo: number): Observable<SoTietKiem> {
    return this.http.delete<SoTietKiem>(this.API + '/' + maSo);
  }
}
