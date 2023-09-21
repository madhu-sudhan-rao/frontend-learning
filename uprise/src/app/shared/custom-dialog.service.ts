import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogBoxComponent } from '../wild-card-components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(
    private dialogService: DialogService
  ) { }

  openDialog(message: string){
    const ref = this.dialogService.open(DialogBoxComponent, {
      width: 'fit-content',
      data: { message },
      closable: false,
      
      style:{
        'background-color': '#282828 !important',
        'border': '0.6px solid rgba(240, 240, 240, 0.20) !important',
        'padding': '0px !important'
      },
      
    });

    return ref.onClose;
  }
}
