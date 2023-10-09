import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isSidebarVisible = true;

  toggleSidebar(isVisible: any) {
    this.isSidebarVisible = isVisible;
}

}
