import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusModule } from './status/status.module';
import {GameService} from './services/game.service';
import { BoardModule } from './board/board.module';
import {MetaModule} from './meta/meta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatusModule,
    BoardModule,
    MetaModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
