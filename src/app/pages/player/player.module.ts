import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from 'src/app/components/botao-menu/botao-menu.component';
import { SidnavComponent } from 'src/app/components/sidnav/sidnav.component';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';



@NgModule({
  declarations: [
    PlayerComponent,
    SidnavComponent,
    BotaoMenuComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
