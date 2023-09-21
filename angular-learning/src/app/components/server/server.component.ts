import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {

  serverId:number = Math.round(Math.random() * 100);
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  getServerStatus(){
    return this.serverStatus;

  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
