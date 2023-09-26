import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './prime-ng-module/prime-ng/prime-ng.module';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { HeaderComponent } from './modules/dashboard/components/dashboard/header/header.component';
import { SideBarComponent } from './modules/dashboard/components/dashboard/side-bar/side-bar.component';
import { MainViewerComponent } from './modules/dashboard/components/dashboard/main-viewer/main-viewer.component';
import { SongsManagementComponent } from './modules/dashboard/components/dashboard/main-viewer/songs-management/songs-management.component';
import { EventManagementComponent } from './modules/dashboard/components/dashboard/main-viewer/event-management/event-management.component';
import { BandProfileComponent } from './modules/dashboard/components/dashboard/main-viewer/band-profile/band-profile.component';
import { NavBarComponent } from './modules/dashboard/components/dashboard/main-viewer/songs-management/nav-bar/nav-bar.component';
import { SongsComponent } from './modules/dashboard/components/dashboard/main-viewer/songs-management/songs/songs.component';
import { SongsListComponent } from './modules/dashboard/components/dashboard/main-viewer/songs-management/songs/songs-list/songs-list.component';
import { SongDetailComponent } from './modules/dashboard/components/dashboard/main-viewer/songs-management/songs/song-detail/song-detail.component';
import { PageNotFoundComponent } from './wild-card-components/page-not-found/page-not-found.component';
import { DialogBoxComponent } from './wild-card-components/dialog-box/dialog-box.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerService } from './shared/spinner.service';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SpinnerComponent } from './modules/dashboard/components/reusable/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    MainViewerComponent,
    SongsManagementComponent,
    EventManagementComponent,
    BandProfileComponent,
    NavBarComponent,
    SongsComponent,
    SongsListComponent,
    SongDetailComponent,
    PageNotFoundComponent,
    DialogBoxComponent,
    SpinnerComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton:true,
      preventDuplicates: false,
    }),
    BrowserAnimationsModule,
    PrimeNgModule,
    NgxSpinnerModule.forRoot(),
    DashboardModule
        
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
