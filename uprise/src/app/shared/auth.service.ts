import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastersService } from './toasters.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private toaster: ToastersService
  ) { }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('bandId');
    localStorage.removeItem('user')
    this.toaster.showSuccess('You have been logged out')
    this.router.navigate(['login']);
  }

}
