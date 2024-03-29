import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorGuard implements CanLoad {

  constructor(
    private _router: Router,
    private _spotifyService: SpotifyService
    ) { }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token');

    if(!token) {
      return this.naoAutenticado();
    }

    return new Promise(async (res) => {
      const usuarioCriado = await this._spotifyService.inicializarUsuario()
      return usuarioCriado ? res(true) : res(this.naoAutenticado());
    })
  }

  naoAutenticado() {
    localStorage.clear();
    this._router.navigate(['/login']);
    return false
  }
}
