import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  message: string;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    // Initialize component properties from dialog configuration data
    this.message = this.config.data.message;
  }

  closeDialog(result: boolean) {
    // Close the dialog and pass the result (true or false) back to the caller
    this.ref.close(result);
  }
}