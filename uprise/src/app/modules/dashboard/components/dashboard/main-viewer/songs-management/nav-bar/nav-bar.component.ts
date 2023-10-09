import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() searchTextChange = new EventEmitter<string>();

  value!:string;
  searchResults: any[]=[];
  private searchTerms = new Subject<string>();

  constructor(
    private dialog: CustomDialogService
  ){}


  openUploadSongDialogBox(){
    this.dialog.openUploadSongDialogBox('Upload Song');
  }

  onSearchText(){
    this.searchTextChange.emit(this.value)
  }

}
