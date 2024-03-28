import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
