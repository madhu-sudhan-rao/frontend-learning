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
    // Load stored user data from localStorage
    this.loadStoredData();
  }
  
  ngOnInit(): void {
    // Redirect to the dashboard if the user is already logged in
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/dashboard/songsmanagement/songs']);
    }
  }

  loadStoredData(){
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      // If user data is stored, load it and set the rememberMe flag
      this.storedDetails = JSON.parse(storedData);
      this.loginDetails.email = this.storedDetails.loginDetails.email;
      this.loginDetails.password = this.decrypt(this.storedDetails.loginDetails.password);
      this.rememberMe = this.storedDetails.rememberMe;
    } else {
      // Initialize storedDetails if no data is found
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
        localStorage.setItem('user',JSON.stringify(user));
        
        console.log(user)
        console.log(localStorage.getItem('user'))
        this.userService.setUserData(user);   
        const bandId = response.data.user.bands[0].id;
        localStorage.setItem('bandId', bandId);
        this.router.navigate(['/dashboard/songsmanagement/songs']);
        const token = response.data.accessToken
        this.auth.setToken(token);

      }, (error): any => {
      
      }
    );

    if(this.rememberMe){
      // Encrypt the password before storing it in the local storage
      this.loginDetails.password = this.encrypt(this.loginDetails.password);
      // Store user data in localStorage if "Remember Me" is checked
      const dataToStore = {
        loginDetails: this.loginDetails,
        rememberMe: this.rememberMe
      };
      localStorage.setItem('userData',JSON.stringify(dataToStore));
    } else{
      // Remove user data from localStorage if "Remember Me" is not checked
      localStorage.removeItem('userData');
    }
    // Reset input values and rememberMe flag
    this.resetValues();
  }

  encrypt(text:string) {
    return btoa(text);
  }

  decrypt(text: string){
    return atob(text);
  }

  resetValues(){
    // Reset loginDetails and rememberMe flag
    this.loginDetails ={
      email:'',
      password:''
    };
    this.rememberMe = false;
  }

}
