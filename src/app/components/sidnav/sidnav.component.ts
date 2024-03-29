import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {

  iconHome = faHome;
  iconSearch = faSearch;
  iconArtist = faGuitar;
  iconPlayList = faMusic;
  
  constructor() { }

  ngOnInit(): void {
  }

}
