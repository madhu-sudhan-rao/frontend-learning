import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastersService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess(message:string) {
    this.toastr.success(message,'',{
      closeButton:false
    });
  }

  showError(message:string){
    this.toastr.error(message,'',{
      closeButton:false
    });
  }

  showWarning(message: string){
    this.toastr.warning(message,'',{
      closeButton:false
    })
  }

}
