import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { LoginComponentComponent } from './background-component/login-component/login-component.component';
import { RegisterComponent } from './background-component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponentComponent,
    LoginComponentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
