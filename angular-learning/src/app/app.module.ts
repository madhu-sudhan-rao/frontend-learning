import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponentComponent } from './cockpit-component/cockpit-component.component';
import { ServerElementComponentComponent } from './server-element-component/server-element-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponentComponent,
    ServerElementComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
