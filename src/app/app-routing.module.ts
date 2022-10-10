import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDetailsComponent } from './create-details/create-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [{path:"",component:StudentDetailsComponent},{path:"add",component:CreateDetailsComponent},{
  path:"update",component:UpdateDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
