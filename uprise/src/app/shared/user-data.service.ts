import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private userData: any = {
    about: null,
    avatar: null,
    bands: {
      bandRoleId: 4,
      id: 61,
      logo: null,
      promosEnabled: false,
      title: "Twilights"
    },
    deletedAt: null,
    email: "madhu@yopmail.com",
    emailVerificationToken: null,
    facebook: null,
    firstName: "",
    lastName: "",
    gender: null,
    id: 112,
    instagram: null,
    mobile: "",
    onBoardingStatus: 0,
    radioPrefrence: {
      genres: null,
      location: null,
      stationType: null
    },
    role: {
      id: 2,
      name: "artist"
    },
    status: "ACTIVE",
    twitter: null,
    userName: "madhu"
  };

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  getBandId(): number{
    const bandId = this.userData.bands.id;
    return bandId;
  }
}
