import { Injectable, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable({
  providedIn: 'root'
})

export class SpinnerService implements OnInit{

  constructor(
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    this.spinner.show();
  }

  showSpinner(){
    this.spinner.show();
  }

  hideSpinner(){
    this.spinner.hide();
  }
}
