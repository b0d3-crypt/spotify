import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlayList } from 'src/app/interfaces/IPlayList';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {

  menuSelecionado = '';
  iconHome = faHome;
  iconSearch = faSearch;
  iconArtist = faGuitar;
  iconPlayList = faMusic;

  playListUser: IPlayList[] = [];
  

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router
  ) { }

  ngOnInit(): void { 
    this.getPlayList();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
    this._router.navigate(['/player/'+botao])

  }

  async getPlayList() {
    this.playListUser = await this._spotifyService.getPlayListUser();
  }


}
