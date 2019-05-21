import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  size = 2;
  rows = [];
  cols = [];


  constructor() {
    this.createBoard();
  }

  createBoard() {
    for (let i = 1; i <= this.size; i++ ) {
      this.rows.push(i);

      for (let j = 1; j <= this.size; j++ ) {
        this.cols.push(j);
        console.log(j);
      }
    }
  }



  ngOnInit() {
  }

}
