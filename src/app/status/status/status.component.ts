import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public timefield;
  public gevonden;

  constructor(public gameService: GameService) {

  }

  ngOnInit() {

  }

  public updateTime()
  {
    this.gameService.seconden++;
    this.timefield = this.gameService.seconden;
  }

}
