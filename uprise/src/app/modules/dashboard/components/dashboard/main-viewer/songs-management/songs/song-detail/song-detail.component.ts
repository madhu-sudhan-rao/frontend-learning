import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ApisService } from 'src/app/shared/apis.service';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';
import { ToastersService } from 'src/app/shared/toasters.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  constructor(
    private api: ApisService,
    private confirmationService: ConfirmationService,
    private toaster: ToastersService,
    private customDialog: CustomDialogService
  ){
  }

  songs:any[] = [];
  
  ngOnInit(): void {
    
    const bandId = Number(localStorage.getItem('bandId'))
    if(bandId !== null){
      this.fetchSongs(bandId);
    } 
    
  }

  fetchSongs(bandId: number): void{
    const search = '';
    const currentPage = 1;
    const perPage = 10;

    this.api.getSongs(bandId, search, currentPage, perPage)
      .subscribe((response: any)=> {
        this.songs = response.data.data;
      },
      (error)=>{
        console.log('Error is: ', error)
      })

  }

  bandId = Number(localStorage.getItem('bandId'))

  formatDuration(durationInSeconds: number): string{
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  toggleLiveStatus(songId: number, liveStatus: boolean): void{
    this.api.changeLiveStatus(songId, liveStatus).subscribe(
      (response: any)=>{
        const songToUpdate = this.songs.find(song => song.id === songId);
      if (songToUpdate) {
        songToUpdate.live = liveStatus;
      }
      }, 
      (error) => {
        console.log('Error is : ',error)
      }
    )
  }

  deleteSong(songId: number): void{
    this.api.deleteSong(songId).subscribe(
      (response: any) => {
        this.toaster.showSuccess(response.message)
      },
      (error) => {
        console.log("Error is : ", error);
        this.toaster.showSuccess(error.error.error)
      }
    )
  }

  openDialogBox(songId: number): void{
    this.customDialog.openDialog('Are you sure you want to delete this song?')
      .subscribe( (result) => {
        if(result === true){
          this.deleteSong(songId);
          this.fetchSongs(this.bandId);
        } else {
          this.toaster.showWarning('Deletion Cancelled')
        }
      })

  }

  showConfirmationDialog(songId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this song?', 
      accept: () => {
        this.deleteSong(songId);
        this.fetchSongs(this.bandId);
      },
      reject: () => {
        this.toaster.showWarning('Deletion Cancelled.')
      }
    });
  }

}
