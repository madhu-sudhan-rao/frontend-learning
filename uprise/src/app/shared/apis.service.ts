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

  private baseUrl: string = 'http://50.19.24.41/';
  private loginUrl: string = 'api/auth/login';
  private signupUrl: string = 'api/auth/signup';
  private songsListUrl: string = 'api/song/songs-list'
  private liveToggleUrl: string = 'api/song/live';
  private deleteSongUrl: string = 'api/song'
  private uploadSongUrl: string = 'api/song/upload'
  private editSongUrl: string = 'api/song/edit/'



  login(loginDetails: LoginDetails){
    return this.http.post(`${this.baseUrl}${this.loginUrl}`, loginDetails);
  }
  
  register(registerDetails: RegisterDetails){
    return this.http.post(`${this.baseUrl}${this.signupUrl}`, registerDetails);
  }
  
  getSongs(bandId: number, search: string, currentPage: number, perPage: number){
    const params = new HttpParams()
      .set('bandId', bandId)
      .set('search', search)
      .set('currentPage', currentPage.toString())
      .set('perPage', perPage.toString());
    
    return this.http.get(`${this.baseUrl}${this.songsListUrl}`, { params: params });
  }

  changeLiveStatus(songId: number, live: boolean){

    const payload = {
      songId: songId,
      live: live
    }
    return this.http.put(`${this.baseUrl}${this.liveToggleUrl}`,payload);
  }

  deleteSong(songId: number){
    return this.http.delete(`${this.baseUrl}${this.deleteSongUrl}/${songId}`);
  }

  uploadSong(formData: FormData){
    return this.http.post(`${this.baseUrl}${this.uploadSongUrl}`,formData);
  }

  editSong(formData: FormData, songId: number){
    return this.http.put(`${this.baseUrl}${this.editSongUrl}${songId}`, formData)
  }

}
