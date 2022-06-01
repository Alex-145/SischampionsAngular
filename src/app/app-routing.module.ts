import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';

const routes: Routes = [
  {path:'',component:ListSchoolComponent},
  {path:'add-school', component:CreateSchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
