import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent = new EventEmitter<boolean>();

  constructor(
    private userService: UserDataService,
    private auth: AuthService
  ){
    const userJson = localStorage.getItem('user'); // userJson can be string or null

    console.log(userJson)
    if(userJson !== null){
      this.user = JSON.parse(userJson)
      console.log(this.user)
    }
  }
  ngOnInit(): void {
    // const userData = this.userService.getUserData();

  }

  user = this.userService.getUserData();
  dropdownStatus: boolean = false;
  sideBarVisible: boolean = false;  
  

  toggleSideBar(){
    this.sideBarVisible = !this.sideBarVisible;
    this.toggleSidebarEvent.emit(this.sideBarVisible);
  }

  toggleDropdown(){
    this.dropdownStatus = !this.dropdownStatus
  }

  logout(): void{
    this.auth.logout();
  }
}
