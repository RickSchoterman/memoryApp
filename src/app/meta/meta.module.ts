import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaComponent } from './meta/meta.component';
import {GameService} from '../services/game.service';

@NgModule({
  declarations: [MetaComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MetaComponent
  ],
  providers : [
    GameService
  ]
})
export class MetaModule { }
