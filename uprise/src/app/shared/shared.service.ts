import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private songUploadedSubject = new Subject<boolean>();
  private songUpdatedSubject = new Subject<boolean>();

  songUploaded$ = this.songUploadedSubject.asObservable();
  songUpdated$ = this.songUpdatedSubject.asObservable();

  uploadSongCompleted() {
    this.songUploadedSubject.next(true);
  }

  updateSongCompleted(){
    this.songUpdatedSubject.next(true);
  }

  private songData: any;

  setSongData(data: any) {
    this.songData = data;
  }

  getSongData() {
    return this.songData;
  }
}
