import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {

  disableStatus: boolean = true;
  buttonStatus: string = 'disabled'


  constructor(){
    setTimeout(()=>{
      this.disableStatus = !this.disableStatus;
      this.buttonStatus = 'enabled'
    },3000)
  }



}
