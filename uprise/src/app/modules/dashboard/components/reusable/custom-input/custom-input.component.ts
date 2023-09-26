import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {

  @Input() type = 'text';
  @Input() kind = '';
  @Input() placeholder = '';
  @Input() required = 'false';
  @Input() value = '';
  @Input() accept = '';
  @Input() label = '';
  @Input() labelStatus = 'false';
  @Input() id = '';
  @Input() name = '';
  @Input('class') className = '';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('audioInput') audioInput!: ElementRef<HTMLInputElement>;
  @Output() imageSelected = new EventEmitter<File>();
  @Output() audioSelected = new EventEmitter<File>();
  @Output() inputText = new EventEmitter<string>();


  onInputChange(event: any){
    const value = event.target.value;
    this.inputText.emit(value);
  }

  openFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  
  clearFileInput(){
    if (this.fileInput) {
      this.fileInput.nativeElement.value = ''; // Clear the input value
    }
  }

  clearAudioInput(){
    const inputElement = document.getElementById('audioInput') as HTMLInputElement;
    inputElement.value = '';
  }

  openAudioInput() {
    const inputElement = document.getElementById('audioInput') as HTMLInputElement;
    inputElement.click();
  }

  onFileSelected(event: any){
    if(event.target.files && event.target.files.length > 0){
      const selectedFile = event.target.files[0];

      if(this.kind === 'image'){
        this.imageSelected.emit(selectedFile);
      } else if(this.kind === 'audio'){
        this.audioSelected.emit(selectedFile);
      }
    }
  }


}
