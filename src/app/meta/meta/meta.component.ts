import {Component, ElementRef, OnInit} from '@angular/core';
import * as $ from 'jquery';
import * as $jscolor from 'jscolor-picker';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css'],
})
export class MetaComponent implements OnInit {
  selectedChar: string = '*';
  selectedSize: number = 6;


  ngOnInit() {

  }

  charChangeHandler(event: any) {
    this.selectedChar = event.target.value;
    console.log(this.selectedChar);

  }

  sizeChangeHandler(event: any) {
    this.selectedSize = event.target.value;
    console.log(this.selectedSize);
  }
}
