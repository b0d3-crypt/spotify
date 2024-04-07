import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-rodape-usuario',
  templateUrl: './rodape-usuario.component.html',
  styleUrls: ['./rodape-usuario.component.scss']
})
export class RodapeUsuarioComponent implements OnInit {

  usuario: IUsuario = null;
  logoutIcon = faSignOutAlt;

  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() { 
    this.usuario = this._spotifyService.usuario
  }

  logout() {
    this._spotifyService.logout();
  }
}
