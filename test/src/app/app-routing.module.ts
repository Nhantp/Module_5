import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListSoComponent} from './list-so/list-so.component';
import {UpdateSoComponent} from './update-so/update-so.component';


const routes: Routes = [{
  path: 'soTietKiem/list',
  component: ListSoComponent
},
  {
    path: 'soTietKiem/edit/:id', component: UpdateSoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
