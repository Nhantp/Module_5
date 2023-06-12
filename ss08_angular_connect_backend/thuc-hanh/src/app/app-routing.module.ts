import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentCreateComponent} from './student/student-create/student-create.component';


const routes: Routes = [{
  path: 'student/list', component: StudentListComponent},
  {
  path: 'student/create', component: StudentCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
