import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomButtonComponent } from './components/reusable/custom-button/custom-button.component';
import { UploadSongDialogComponent } from './components/upload-song-dialog/upload-song-dialog.component';
import { CustomInputComponent } from './components/reusable/custom-input/custom-input.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CustomParagraphComponent } from './components/reusable/custom-paragraph/custom-paragraph.component';
import { SpinnerComponent } from './components/reusable/spinner/spinner.component';
import { EditSongDialogComponent } from './components/edit-song-dialog/edit-song-dialog.component';
import { SongCardViewComponent } from './components/dashboard/main-viewer/songs-management/songs/song-card-view/song-card-view.component';


@NgModule({
  declarations: [
    UploadSongDialogComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomParagraphComponent,
    EditSongDialogComponent,
    SongCardViewComponent,
    // SpinnerComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
