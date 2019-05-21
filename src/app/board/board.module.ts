import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {GameService} from '../services/game.service';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ],
  providers: [
    GameService
  ]
})
export class BoardModule { }
