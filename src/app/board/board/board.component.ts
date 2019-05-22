import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards = [];
  size = 2;
  cellCount = 0;


  constructor() {
    this.createBoard();
  }

  createBoard() {


    for (let i = 0; i < this.size; i++ ) {

      this.cards.push([i]);


      for (let j = 0; j < this.size; j++ ) {

        console.log(i);
        this.cards[i].push([this.cellCount]);

      }

      this.cellCount++;

    }

    console.log(this.cards);

  }


  ngOnInit() {
  }

}
