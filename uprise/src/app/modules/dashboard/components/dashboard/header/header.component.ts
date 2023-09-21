import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserDataService,
    private auth: AuthService
  ){
  }
  ngOnInit(): void {
    // const userData = this.userService.getUserData();
  }
  
  user = this.userService.getUserData();

  dropdownStatus: boolean = false;
  
  toggleDropdown(){
    this.dropdownStatus = !this.dropdownStatus
  }

  logout(): void{
    this.auth.logout();
  }
}
