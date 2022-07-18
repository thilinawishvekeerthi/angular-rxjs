import { Component, OnInit } from '@angular/core';
import { Tile } from '../shared/model/Title';
import { GridService } from '../shared/service/grid.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urls: string[] = [];
  loading: boolean = false;

  title = 'angular-rxjs';
  tiles: Tile[] = [];


  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    
    this.loadGridTiles();
    
  }

  private loadGridTiles() {
    this.loading = true;
    this.gridService.loadGridTiles(0).subscribe(res => {
      if (res && res.payload) {
        this.tiles = res.payload;
      }
      this.loading = false;
    }, err=>{
      console.error(err); 
      this.loading = false;
    });
  }

  getImageUrl(tile:Tile, index: number):string{
    if(!this.urls[index]){
      const url =`https://picsum.photos/id/${Math.floor(Math.random() * 700)}/${tile.cols*500}/${tile.rows*400}`;
      this.urls[index] = url;
    }
    return this.urls[index] ;
  }

}
