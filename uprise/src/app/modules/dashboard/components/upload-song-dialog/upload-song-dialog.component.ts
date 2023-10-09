import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CustomInputComponent } from '../reusable/custom-input/custom-input.component';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';
import { ApisService } from 'src/app/shared/apis.service';
import { UserDataService } from 'src/app/shared/user-data.service';
import { SharedService } from 'src/app/shared/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-song-dialog',
  templateUrl: './upload-song-dialog.component.html',
  styleUrls: ['./upload-song-dialog.component.scss']
})
export class UploadSongDialogComponent implements OnInit {

  @Output() pageRefresh = new EventEmitter<boolean>;
  @ViewChild(CustomInputComponent) customInput!: CustomInputComponent;

  constructor(
    private dialog: CustomDialogService,
    private api: ApisService,
    private userData: UserDataService,
    private sharedService : SharedService,
    private fb: FormBuilder
  ){
  }

  ngOnInit() {

    // Initialize an empty form
    this.songForm = this.fb.group({
      title: [''],
      city: [''],
      genre: [''],
      thumbnail: [null], // Initialize with null, you can set the value when the image is selected
      song: [null], 
    });

    // Initialize your form and populate it with song data from the service
    const songData = this.sharedService.getSongData();
    this.songForm.patchValue({
      title: songData.title,
      city: songData.city,
      genre: songData.genre,
      thumbnail: songData.thumbnail,
      song: songData.song,
    });

    this.imageSrc = songData.thumbnail;
    this.audioSrc = songData.song
  }

  // Define variables
  image!: File | undefined;
  audio!: File | any;
  title: string = '';
  city: string = '';
  genre: string = '';
  inputValue: string = '';
  selectedImage: any;
  imageSrc!: string;
  audioSrc!: string;
  showDeleteButton: boolean = false;

  songForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    city: new FormControl(''),
    genre: new FormControl(''),
    thumbnail: new FormControl(null), // Initialize with null, you can set the value when the image is selected
    song: new FormControl(null)
  })

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

    console.log(this.songForm.controls)
    const titleValue = this.songForm.get('title')?.value;
    const cityValue = this.songForm.get('city')?.value;
    const genreValue = this.songForm.get('genre')?.value;
    const songValue = this.songForm.get('song')?.value;

    // console.log('Title:', titleValue);
    // console.log('City:', cityValue);
    // console.log('Genre:', genreValue);
    // console.log('Song:', songValue);

    const formData = new FormData();
    formData.append('title', this.songForm.get('title')?.value);
    formData.append('genres', this.songForm.get('genre')?.value);
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

    console.log(formData)
    
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

  onUpdateSong(){

    const id = 245;
    console.log(this.songForm.controls)
    const titleValue = this.songForm.get('title')?.value;
    const cityValue = this.songForm.get('city')?.value;
    const genreValue = this.songForm.get('genre')?.value;
    const songValue = this.songForm.get('song')?.value;

    console.log('Title:', titleValue);
    console.log('City:', cityValue);
    console.log('Genre:', genreValue);
    console.log('Song:', songValue);

    const formData = new FormData();
    formData.append('title', titleValue);
    formData.append('genres', genreValue);
    // formData.append('thumbnail', this.songForm.get('thumbnail')?.value);
    formData.append('thumbnail', this.selectedImage);
    formData.append('song', songValue);
    formData.append('cityName', 'Ventura');
    formData.append('stateName', 'Calofornia');
    formData.append('country', 'USA');
    formData.append('latitude', '34.2804923');
    formData.append('longitude', '-119.2945199');
    formData.append('albumId','' )
    formData.append('bandId', this.userData.getBandId().toString())
    formData.append('userId', this.userData.getUserId())

    console.log(formData)

    this.api.editSong(formData, id).subscribe(
      (response: any) => {
        this.sharedService.updateSongCompleted();
        this.dialog.closeDialog()
      },
      (error) => {
        this.dialog.closeDialog()
      }
    )

    // this.api.editSong(formData).subscribe

  }

  handleSave(parameter: any){
    if(parameter){
      this.onUpdateSong()
    } else{
      this.onSave()
    }
  }

  
}
