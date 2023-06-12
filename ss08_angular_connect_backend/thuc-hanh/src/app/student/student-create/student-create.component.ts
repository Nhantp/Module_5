import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      score: new FormControl()
    });
  }

  save() {
    this.studentService.save(this.studentForm.value).subscribe(next => {
        this.router.navigateByUrl('/student/list');
      }, error => {
      },
      () => {
      });
  }

}
