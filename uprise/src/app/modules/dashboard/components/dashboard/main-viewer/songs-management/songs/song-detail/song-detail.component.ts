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

  
  // Paginator
  paginatorStatus:boolean = false
  totalRecords!:number;
  rowsPerPageOptions: number[] = [10, 20, 30]; 
  currentPage: number = 1;
  rowsPerPage: number = 10;

  
  onPageChange(event: any) {
    this.currentPage = event.page + 1; 
    this.rowsPerPage = event.rows;
    this.getBandIdAndGetSongs();
  }
  
  ngOnInit(): void {
    // Fetch songs when component initializes
    this.getBandIdAndGetSongs();
    
  }

  // Get band Id from localstorage and fetch songs
  getBandIdAndGetSongs(){
    const bandId = Number(localStorage.getItem('bandId'))
    if(bandId !== null){
      this.fetchSongs(bandId);
    } 
  }

  // Get Songs based on bandId, currentPage, and rowsPerPage
  songs:any[] = [];

  fetchSongs(bandId: number): void{
    const search = '';
    const perPage = this.rowsPerPage;
    const currentPage = this.currentPage;

    this.api.getSongs(bandId, search, currentPage, perPage)
      .subscribe((response: any)=> {
        this.songs = response.data.data;
        // Check if pagination should be displayed
        if(this.songs.length > 2){
          this.paginatorStatus = true;
        }
        this.totalRecords = response.data.data[0].totalCount;
      },
      (error)=>{
        console.log('Error is: ', error)
      })

  }


  // Format duration in minutes and seconds
  formatDuration(durationInSeconds: number): string{
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // Toggle live status of a song
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

  //  Delete a song
  deleteSong(songId: number): void{
    this.api.deleteSong(songId).subscribe(
      (response: any) => {
        // Fetch songs again after deletion
        this.getBandIdAndGetSongs();
      },
      (error) => {
        console.log("Error is : ", error);
        this.toaster.showSuccess(error.error.error)
      }
    )
  }

  // Open a custom confirmation dialog
  openDialogBox(songId: number): void{
    this.customDialog.openDialog('Are you sure you want to delete this song?')
      .subscribe( (result) => {
        if(result === true){
          this.deleteSong(songId);
        } else {
          this.toaster.showWarning('Deletion Cancelled')
        }
      })

  }

  // Show PrimeNG confirmation dialog
  showConfirmationDialog(songId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this song?', 
      accept: () => {
        this.deleteSong(songId);
      },
      reject: () => {
        this.toaster.showWarning('Deletion Cancelled.')
      }
    });
  }

}
