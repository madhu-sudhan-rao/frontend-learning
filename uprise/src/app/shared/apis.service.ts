import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../user-auth/login/loginDetails.model';
import { RegisterDetails } from '../user-auth/register/registerDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string = 'http://50.19.24.41/';
  private loginUrl: string = 'api/auth/login';
  private signupUrl: string = 'api/auth/signup';
  private songsListUrl: string = 'api/song/songs-list'
  private liveToggleUrl: string = 'api/song/live';
  private deleteSongUrl: string = 'api/song'



  login(loginDetails: LoginDetails){
    return this.http.post(`${this.apiUrl}${this.loginUrl}`, loginDetails);
  }
  
  register(registerDetails: RegisterDetails){
    return this.http.post(`${this.apiUrl}${this.signupUrl}`, registerDetails);
  }
  
  getSongs(bandId: number, search: string, currentPage: number, perPage: number){
    const params = new HttpParams()
      .set('bandId', bandId)
      .set('search', search)
      .set('currentPage', currentPage.toString())
      .set('perPage', perPage.toString());
    
    return this.http.get(`${this.apiUrl}${this.songsListUrl}`, { params: params });
  }

  changeLiveStatus(songId: number, live: boolean){

    const payload = {
      songId: songId,
      live: live
    }

    return this.http.put(`${this.apiUrl}${this.liveToggleUrl}`,payload);

  }

  deleteSong(songId: number){
    
    return this.http.delete(`${this.apiUrl}${this.deleteSongUrl}/${songId}`);
  }

}
