import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server was created'
  serverName: string='Test server';
  serverCreated: boolean = false;
  // serverName!: string;
  servers: string[] = ['Test server 1', 'Test server 2'];
  
  constructor(){
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true
    console.log("🚀 ~ file: servers.component.ts:16 ~ ServersComponent ~ servers:", this.servers);
    
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
