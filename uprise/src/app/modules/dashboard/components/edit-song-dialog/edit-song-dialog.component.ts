import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApisService } from 'src/app/shared/apis.service';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';
import { SharedService } from 'src/app/shared/shared.service';
import { UserDataService } from 'src/app/shared/user-data.service';
import { CustomInputComponent } from '../reusable/custom-input/custom-input.component';

@Component({
  selector: 'app-edit-song-dialog',
  templateUrl: './edit-song-dialog.component.html',
  styleUrls: ['./edit-song-dialog.component.scss']
})
export class EditSongDialogComponent {

  
  @Output() pageRefresh = new EventEmitter<boolean>;
  @ViewChild(CustomInputComponent) customInput!: CustomInputComponent;

  songData!: any;

  constructor(
    private dialog: CustomDialogService,
    private api: ApisService,
    private userData: UserDataService,
    private sharedService : SharedService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ){
    this.songData = this.config.data.songData;
    console.log(this.songData)
    console.log(this.songData.title)
  }
  
    // Define variables
    image!: File | undefined;
    audio!: File | any;
    title: string='';
    city: string = '';
    genre: string = '';
    inputValue: string = '';
    selectedImage: any;
    imageSrc!: string;
    audioSrc!: string;
    showDeleteButton: boolean = false;
  
    // Open file input for image
    openImageInput() {
      this.customInput.openFileInput();
    }
  
    // Open file input for audio
    openAudioInput(){
      this.customInput.openAudioInput();
    }
  
    // Handle image selection
    onImageSelected(imageFile: File){
      this.image = imageFile;
      this.selectedImage = imageFile
      
      // Read and display the selected image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        reader.abort();
  
      };
      reader.readAsDataURL(this.image);
      reader.readAsDataURL(this.selectedImage);
    }
  
    // Handle audio selection
    onAudioSelected(audioFile: File){
      this.audio = audioFile;
  
      const reader = new FileReader();
      reader.readAsDataURL(this.audio);
      this.audioSrc = '../../../../../assets/images/default_poster.png';
    }
    
    onInputChange(inputName: string, event: any) {
      if (event) {
        const value = event;
    
        // Store the input value in the appropriate variable based on the input name
        if (inputName === 'title') {
          this.title = value;
        } else if (inputName === 'city') {
          this.city = value;
        } else if (inputName === 'genre') {
          this.genre = value;
        }
      }
    
    }
  
    // Function to delete the selected image
    deleteImage(){
      // Reset the image source and hide the delete button
      this.imageSrc = '';
      this.showDeleteButton = false;
  
      // Clearing the selected image in the image variable
      this.image = undefined; 
      this.customInput.clearFileInput();
    }
  
    // Function to delete the selected audio
    deleteAudio(){
      // Reset the audio source and hide the delete button
      this.audioSrc = '';
      this.showDeleteButton = false;
  
      // Clearing the selected audio in the audio variable
      this.audio = undefined; 
      this.customInput.clearAudioInput();
    }
  
    // Close the dialog box
    onClose(){
      this.dialog.closeDialog();
    }
  
    // Save data and log it
    onSave(){
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('genres', this.genre);
      formData.append('thumbnail', this.selectedImage);
      formData.append('song', this.audio);
      formData.append('cityName', 'Ventura');
      formData.append('stateName', 'CA');
      formData.append('country', 'USA');
      formData.append('latitude', '34.2804923');
      formData.append('longitude', '-119.2945199');
      formData.append('albumId','' )
      formData.append('bandId', this.userData.getBandId().toString())
      formData.append('userId', this.userData.getUserId())
      
      this.api.uploadSong(formData).subscribe(
        (response: any)=>{
          this.sharedService.uploadSongCompleted();
          this.dialog.closeDialog();
        },
        (error) => {
          this.dialog.closeDialog();
        }
      )
    }

}
