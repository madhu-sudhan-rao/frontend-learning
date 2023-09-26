import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(public spinner: SpinnerService){}

}
