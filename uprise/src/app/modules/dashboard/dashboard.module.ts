import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomButtonComponent } from './components/reusable/custom-button/custom-button.component';
import { UploadSongDialogComponent } from './components/upload-song-dialog/upload-song-dialog.component';
import { CustomInputComponent } from './components/reusable/custom-input/custom-input.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CustomParagraphComponent } from './components/reusable/custom-paragraph/custom-paragraph.component';
import { SpinnerComponent } from './components/reusable/spinner/spinner.component';


@NgModule({
  declarations: [
    UploadSongDialogComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomParagraphComponent,
    // SpinnerComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FileUploadModule
  ]
})
export class DashboardModule { }
