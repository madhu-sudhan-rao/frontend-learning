import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit-component',
  templateUrl: './cockpit-component.component.html',
  styleUrls: ['./cockpit-component.component.scss']
})
export class CockpitComponentComponent {

  @Output('server') serverCreated: any = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('blueprint') blueprintCreated: any = new EventEmitter<{serverName:string, serverContent: string}>();
  serverElements = [{type:'',name:'',content:''}];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;
  @ViewChild('serverNameInput') serverNameInput!: ElementRef;

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  
  onAddBlueprint(serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContent.value
    })
  }
}
