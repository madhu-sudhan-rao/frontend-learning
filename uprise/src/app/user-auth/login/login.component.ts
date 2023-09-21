import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/shared/apis.service';
import { LoginDetails } from './loginDetails.model';
import { ToastersService } from 'src/app/shared/toasters.service';
import { UserDataService } from 'src/app/shared/user-data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginDetails: LoginDetails = new LoginDetails();
  storedDetails: any;
  rememberMe: boolean = false;

  constructor(
    private service: ApisService,
    private toaster: ToastersService,
    private userService: UserDataService,
    private router: Router,
    private auth: AuthService
  ) {
    this.loadStoredData();
  }
  
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/dashboard/songsmanagement/songs']);
    }
  }

  loadStoredData(){
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      this.storedDetails = JSON.parse(storedData);
      this.loginDetails.email = this.storedDetails.loginDetails.email;
      this.loginDetails.password = this.decrypt(this.storedDetails.loginDetails.password);
      this.rememberMe = this.storedDetails.rememberMe;
    } else {
      this.storedDetails = {
        loginDetails: { email: "", password: "" },
        rememberMe: false
      };
    }
  }

  onSubmit(){  
    this.service.login(this.loginDetails).subscribe(
      (response: any) => {
        const user = response.data.user;
        this.userService.setUserData(user);   
        const bandId = response.data.user.bands[0].id;
        localStorage.setItem('bandId', bandId);
        this.router.navigate(['/dashboard/songsmanagement/songs']);
        const token = response.data.accessToken
        this.auth.setToken(token);

      }, (error): any => {
        // console.log(error)
        // const message = error.error.error;
        // this.toaster.showError(message);        
      }
    );
    this.loginDetails.password = this.encrypt(this.loginDetails.password);
    if(this.rememberMe){
      const dataToStore = {
        loginDetails: this.loginDetails,
        rememberMe: this.rememberMe
      };
      localStorage.setItem('userData',JSON.stringify(dataToStore));
    } else{
      localStorage.removeItem('userData');
    }

    this.resetValues();
  }

  encrypt(text:string) {
    return btoa(text);
  }

  decrypt(text: string){
    return atob(text);
  }

  resetValues(){
    this.loginDetails ={
      email:'',
      password:''
    };
    this.rememberMe = false;
  }

}
