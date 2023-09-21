import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SongsManagementComponent } from './components/dashboard/main-viewer/songs-management/songs-management.component';
import { SongsListComponent } from './components/dashboard/main-viewer/songs-management/songs/songs-list/songs-list.component';
import { EventManagementComponent } from './components/dashboard/main-viewer/event-management/event-management.component';
import { BandProfileComponent } from './components/dashboard/main-viewer/band-profile/band-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'songsmanagement',
        title:'Songs Management',
        component: SongsManagementComponent,
        children: [
          {
            path: 'songs',
            title: 'Songs',
            component: SongsListComponent
          }
        ]
      },
      {
        path:'eventmanagement',
        title: 'Event Management',
        component: EventManagementComponent
      },
      {
        path: 'bandsprofile',
        title: 'Bands Profile',
        component: BandProfileComponent
      },
      {
        path: '',
        redirectTo: '/dashboard/songsmanagement/songs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
