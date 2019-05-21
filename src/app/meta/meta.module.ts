import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaComponent } from './meta/meta.component';
import {GameService} from '../services/game.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MetaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    MetaComponent
  ],
  providers : [
    GameService
  ]
})
export class MetaModule { }
