import { Component, OnInit } from '@angular/core';
import {SoTietKiem} from '../model/so-tiet-kiem';
import {SoTietKiemService} from '../service/soTietKiem-service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-so',
  templateUrl: './list-so.component.html',
  styleUrls: ['./list-so.component.css']
})
export class ListSoComponent implements OnInit {

  soTietKiems: SoTietKiem[];
  soTietKiem: SoTietKiem;
  p = 1;

  constructor(private soTietKiemService: SoTietKiemService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSoTietKiem();
  }

  getAllSoTietKiem() {
    this.soTietKiemService.getAll().subscribe(
      (data: SoTietKiem[]) => {
        this.soTietKiems = data;
      });
  }
  getSoTietKiem(id: number) {
    this.soTietKiemService.findById(id).subscribe(data => {
      this.soTietKiem = data;
    });
  }

  delete() {
    this.soTietKiemService.delete(this.soTietKiem.maSoSo).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.getAllSoTietKiem();
    });
  }

}
