import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotaoMenuComponent } from 'src/app/components/botao-menu/botao-menu.component';
import { RodapeUsuarioComponent } from 'src/app/components/rodape-usuario/rodape-usuario.component';
import { SidnavComponent } from 'src/app/components/sidnav/sidnav.component';
import { HomeComponent } from '../home/home.component';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';



@NgModule({
  declarations: [
    PlayerComponent,
    SidnavComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
