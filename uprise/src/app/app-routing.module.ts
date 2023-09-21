import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { PageNotFoundComponent } from './wild-card-components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'Login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    title: 'Error 404, Page not found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
