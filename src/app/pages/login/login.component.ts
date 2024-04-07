import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.verificaTokenCallBack();  
  }

  verificaTokenCallBack() {
    const token = this._spotifyService.obterTokenUrlCallBack();
    if(!!token) {
      this._spotifyService.definirAccessToken(token);
      this._router.navigate(['/player/home']);
    }
  }

  abrirPaginaLogin() {
    window.location.href = this._spotifyService.obterUrlLogin();
  }
}
