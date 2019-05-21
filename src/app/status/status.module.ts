import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import {GameService} from '../services/game.service';

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    StatusComponent
  ],
  providers : [
    GameService
  ]
})
export class StatusModule { }
