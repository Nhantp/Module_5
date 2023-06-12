import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student-service';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(next => {
      this.students = next;
    });
  }

}
