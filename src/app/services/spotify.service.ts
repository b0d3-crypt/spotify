import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfiguration } from 'src/environments/environment';
import { SpotifyUsertoUser } from '../Common/spotifyHelper';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;

  usuario: IUsuario;
  
  constructor() { 
    this.spotifyApi = new Spotify();
  }

  async inicializarUsuario() {
    if(!!this.usuario)
      return true;
    
      const token = localStorage.getItem('token');

    if(!token)
      return false;

    try {
      this.definirAccessToken(token);
      await this.obterUsuarioUser();
      return !!this.usuario;
    } catch(e) {
      console.error(e)
      return false;
    }
  }

  async obterUsuarioUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUsertoUser(userInfo);
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
    if(!window.location.hash) {
      return ''
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    //this.spotifyApi.skipToNext();
  }
}
