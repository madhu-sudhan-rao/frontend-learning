import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ApisService } from 'src/app/shared/apis.service';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ToastersService } from 'src/app/shared/toasters.service';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit, OnChanges {
  @Input() searchText: string = '';

  constructor(
    private api: ApisService,
    private confirmationService: ConfirmationService,
    private toaster: ToastersService,
    private customDialog: CustomDialogService,
    private userData: UserDataService,
    private sharedService: SharedService,
    
  ){
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['searchText'] && !changes['searchText'].firstChange){
      this.performSearch(this.searchText)
    }
  }
  
  performSearch(text: string){
    if(text!==""){
      this.getSearchResult(text)
    } else{
      this.getBandIdAndGetSongs();
    }
  }

  // Paginator
  paginatorStatus:boolean = false
  totalRecords!:number;
  rowsPerPageOptions: number[] = [2, 3, 5]; 
  currentPage: number = 1;
  rowsPerPage: number = 5;

  
  onPageChange(event: any) {
    this.currentPage = event.page + 1; 
    this.rowsPerPage = event.rows;
    this.getBandIdAndGetSongs();
    console.log(this.currentPage)
    console.log(this.rowsPerPage)
  }
  
  ngOnInit(): void {
    // Fetch songs when component initializes
    this.getBandIdAndGetSongs();

    // Subscribe to the songs$ observable to receive updates
    this.sharedService.songUploaded$.subscribe((songUploaded) => {
      if (songUploaded) {
        // Call fetchSongs() to display songs
        this.getBandIdAndGetSongs();
      }
    });
    
    // Subscribe to the songs$ observable to receive updates
    this.sharedService.songUpdated$.subscribe((songUpdated) => {
      if(songUpdated){
        // Call fetchSongs() to display songs
        this.getBandIdAndGetSongs();
      }
    })
  }

  // Get band Id from localstorage and fetch songs
  getBandIdAndGetSongs(){
    const bandId = Number(localStorage.getItem('bandId'))
    if(bandId !== null){
      this.fetchSongs(bandId,'', this.rowsPerPage,this.currentPage);
    } 
  }

  // Get band Id from localstorage and get search result
  getSearchResult(searchText: string){
    const bandId = Number(localStorage.getItem('bandId'))
    if(bandId !== null){
      this.fetchSongs(bandId,searchText, this.rowsPerPage,1);
    } 
  }

  // Get Songs based on bandId, currentPage, and rowsPerPage
  songs:any[] = [];

  fetchSongs(bandId: number, search: string,perPage: number, currentPage: number): void{

    this.api.getSongs(bandId, search, currentPage, perPage)
      .subscribe((response: any)=> {
        this.songs = response.data.data;
        console.log(this.songs)
        // Check if pagination should be displayed
        if(this.songs.length > 2){
          this.paginatorStatus = true;
        }
        this.totalRecords = response.data.data[0].totalCount;
      },
      (error)=>{
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
  openDeleteBox(songId: number): void{
    this.customDialog.openDialog('Are you sure you want to delete this song?')
      .subscribe( (result) => {
        if(result === true){
          this.deleteSong(songId);
        } else {
          this.toaster.showWarning('Deletion Cancelled')
        }
      })
  }

  openEditBox(song: any){
    this.customDialog.openEditSongDialogBox('Edit Song',song)
    
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


  onEditSong(song: any) {
    const songData = {
      title: song.title,
      city: song.cityName,
      genre: song.genres[0].genre_name,
      thumbnail: song.thumbnail,
      song: song.song
    };

    // Set the song data using the service
    this.sharedService.setSongData(songData);
    console.log(song)
    console.log(songData)

    this.customDialog.openEditSongDialogBox('Edit Song',song)

  }

}
