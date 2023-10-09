import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-card-view',
  templateUrl: './song-card-view.component.html',
  styleUrls: ['./song-card-view.component.scss']
})
export class SongCardViewComponent {

  @Input() songs!: any[];

}
