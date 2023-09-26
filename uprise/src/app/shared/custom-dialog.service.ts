import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogBoxComponent } from '../wild-card-components/dialog-box/dialog-box.component';
import { UploadSongDialogComponent } from '../modules/dashboard/components/upload-song-dialog/upload-song-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(
    private dialogService: DialogService
  ) { }

  ref: DynamicDialogRef | undefined;

  show(header: string){
    this.ref = this.dialogService.open(UploadSongDialogComponent, {
      header: header,
      closable: true
    });
  }

  openDialog(message: string){
    const res = this.dialogService.open(DialogBoxComponent, {
      width: 'fit-content',
      data: { message },
      closable: false,
      
      style:{
        'background-color': '#282828 !important',
        'border': '0.6px solid rgba(240, 240, 240, 0.20) !important',
        'padding': '0px !important'
      },
      
    });

    return res.onClose;
  }

  closeDialog(){
    if(this.ref){
      this.ref.close();
    }
  
  }
}
