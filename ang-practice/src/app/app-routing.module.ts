import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './background-component/login-component/login-component.component';
import { RegisterComponent } from './background-component/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponentComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponentComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
