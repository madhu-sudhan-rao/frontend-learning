import { Component } from '@angular/core';

@Component({
  selector: 'app-songs-management',
  templateUrl: './songs-management.component.html',
  styleUrls: ['./songs-management.component.scss']
})
export class SongsManagementComponent {

  searchText: string = '';

  handleSearchTextChange(text: string) {
    this.searchText = text;
    // console.log(this.searchText)
  }

}
