import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'uprise';
  constructor(
    private spinner: SpinnerService
  ){}
  ngOnInit(): void {
    // this.spinner.showSpinner()
  }
  
}
