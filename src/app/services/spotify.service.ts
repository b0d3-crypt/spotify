import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  
  constructor() { 
    this.spotifyApi = new Spotify();
  }

  obterUrlLogin() {
    const authEndPointing = `${SpotifyConfiguration.authEndPoint}?`;
    const clinetId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPointing + clinetId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallBack() {
    console.log(window.location.hash)
    if(!window.location.hash) {
      return ''
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    this.spotifyApi.skipToNext();
  }
}
