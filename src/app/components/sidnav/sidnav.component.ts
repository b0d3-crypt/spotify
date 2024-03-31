import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void { 
    this.getPlayList();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
  }

  async getPlayList() {
    this.playListUser = await this._spotifyService.getPlayListUser();
  }
}
