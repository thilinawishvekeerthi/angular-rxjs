import { Component, OnInit } from '@angular/core';
import { Tile } from '../shared/model/Title';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  urls: string[] = [];

  title = 'angular-rxjs';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 3, rows: 1, color: '#lightpink'},
  ];

  getImageUrl(tile:Tile, index: number):string{
    if(!this.urls[index]){
      const url =`https://picsum.photos/id/${Math.floor(Math.random() * 700)}/${tile.cols*500}/${tile.rows*400}`;
      this.urls[index] = url;
    }
    return this.urls[index] ;
  }

}
