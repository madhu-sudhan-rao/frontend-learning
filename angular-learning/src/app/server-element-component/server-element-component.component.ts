import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element-component',
  templateUrl: './server-element-component.component.html',
  styleUrls: ['./server-element-component.component.scss']
})
export class ServerElementComponentComponent {

  @Input('srvElement') element!: { type: string; name: string; content: string; };
  constructor(){}

}
