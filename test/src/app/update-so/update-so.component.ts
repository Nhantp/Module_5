import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SoTietKiemService} from '../service/soTietKiem-service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-so',
  templateUrl: './update-so.component.html',
  styleUrls: ['./update-so.component.css']
})
export class UpdateSoComponent implements OnInit {

  id: number;
  soTietKiemForm: FormGroup = new FormGroup({
    maSoSo: new FormControl(),
    maKhachHang: new FormControl(),
    tenKhachHang: new FormControl(),
    ngayMoSo: new FormControl(),
    thoiGianBatDauGui: new FormControl(),
    kyHan: new FormControl(),
    soTienGui: new FormControl(),
    laiSuat: new FormControl()
  });


  constructor(private soTietKiemService: SoTietKiemService, private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.soTietKiemService.findById(this.id).subscribe(soTietKiem => {
      this.soTietKiemForm = new FormGroup({
        maSoSo: new FormControl(soTietKiem.maSoSo, [Validators.required]),
        maKhachHang: new FormControl(soTietKiem.maKhachHang, [Validators.required]),
        tenKhachHang: new FormControl(soTietKiem.tenKhachHang, [Validators.required,]),
        ngayMoSo: new FormControl(soTietKiem.ngayMoSo, [Validators.required]),
        thoiGianBatDauGui: new FormControl(soTietKiem.thoiGianBatDauGui, [Validators.required]),
        kyHan: new FormControl(soTietKiem.kyHan, [Validators.required]),
        soTienGui: new FormControl(soTietKiem.soTienGui, [Validators.required]),
        laiSuat: new FormControl(soTietKiem.laiSuat, [Validators.required]),
      });
    });
  }

  edit(id: number) {
    const benhAn = this.soTietKiemForm.value;
    this.soTietKiemService.update(id, benhAn).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('benhAn/list');
    });
  }

}
