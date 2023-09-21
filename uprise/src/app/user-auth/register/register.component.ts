import { Component } from '@angular/core';
import { ApisService } from 'src/app/shared/apis.service';
import { RegisterDetails } from './registerDetails.model';
import { ToastersService } from 'src/app/shared/toasters.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private apiService : ApisService,
    private toaster: ToastersService,
  ){}

  registrationDetails : RegisterDetails = new RegisterDetails();
  termsAndConditions:boolean = false;

  onSubmit(){
    if(this.termsAndConditions){
      this.apiService.register(this.registrationDetails).subscribe(
        (response:any) => {
          const message = response.message;
          this.toaster.showSuccess(message);
        }, (error) => {
          const message = error.error.error
          this.toaster.showError(message);
        }
      )
    }
  }


}
