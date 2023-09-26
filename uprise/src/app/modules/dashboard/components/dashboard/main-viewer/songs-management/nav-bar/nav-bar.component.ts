import { Component } from '@angular/core';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  value!:string;
  constructor(
    private dialog: CustomDialogService
  ){}


  openUploadSongDialogBox(){
    this.dialog.show('Upload Song');
  }

}
