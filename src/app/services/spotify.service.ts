import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfiguration } from 'src/environments/environment';
import { SpotifyPlayListToPlayList, SpotifyUsertoUser } from '../Common/spotifyHelper';
import { IPlayList } from '../interfaces/IPlayList';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;

  usuario: IUsuario;
  
  constructor(
    private _router: Router
  ) { 
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

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
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

  async getPlayListUser(offset = 0, limit = 50): Promise<IPlayList[]> {
    const playList = await this.spotifyApi.getUserPlaylists(this.usuario.id, {offset, limit })
    console.log(playList.items[0].images.pop().url)
    return playList.items.map(item => SpotifyPlayListToPlayList(item));
  }
}
