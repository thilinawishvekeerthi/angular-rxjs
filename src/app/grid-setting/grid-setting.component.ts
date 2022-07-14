import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tile } from '../shared/model/Title';
import { GridService } from '../shared/service/grid.service';

@Component({
  selector: 'grid-setting',
  templateUrl: './grid-setting.component.html',
  styleUrls: ['./grid-setting.component.scss']
})
export class GridSettingComponent implements OnInit {

  colCount : number = 0;
  loading: boolean = false;
  loadingStep: boolean = false;

  tiles: Tile[] = [];
  selectedTiles: Tile[] = [];

  setUpGridFormGroup: FormGroup = this._formBuilder.group({
    numberOfRows: ['',[Validators.required]],
    numberOfColumns: ['',[Validators.required]],
    numberOfMergeCellsPerTime: ['',[Validators.required]]
  });
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  constructor(
    private _formBuilder: FormBuilder,
    private gridService: GridService) {}


  ngOnInit(): void {
    this.loadGridTiles();
  }

  private loadGridTiles() {
    this.loading = true;
    this.gridService.loadGridTiles(0).subscribe(res => {
      if (res && res.payload) {
        this.tiles = res.payload;
      }
      this.colCount = 4;
      this.loading = false;
    }, err=>{
      console.error(err); 
      this.loading = false;
    });
  }


  generateGrid():void{
    this.tiles =[];
    this.selectedTiles = [];
    const formValue = this.setUpGridFormGroup.value;
    this.colCount = formValue.numberOfColumns;
    const cellCount: number = formValue.numberOfRows* formValue.numberOfColumns;
    for(let index = 0; index < cellCount; index++){
      const tile : Tile ={
        id : index+1,
        color: 'gray',
        cols: 1,
        rows: 1,
        text:'',
        selected : false,
        merged: false
      }
      this.tiles.push(tile)
    }
  }

  gridCellClick(tile: Tile):void{
    const formValue = this.setUpGridFormGroup.value;
    // adding and removing selected tiles to mutable 
    if(!tile.merged){
      if(tile.selected){
        let index = this.selectedTiles.findIndex(d => d.id === tile.id); 
        this.selectedTiles.splice(index, 1);
        tile.color = 'gray';
        tile.selected = false;
      }
      // check merge cell validation and change selected tile
      else if(formValue.numberOfMergeCellsPerTime > this.selectedTiles.length){
        tile.color = 'red';
        tile.selected = true;
        this.selectedTiles.push(tile);
      } else{
        alert("exeeds selected cells");
      }
    }else{
      alert("cannot select merge cells");
    }
    
   
  }

  mergeCells():void{
    const formValue = this.setUpGridFormGroup.value;
    
    const firstTile: Tile = this.selectedTiles[0];
    const verticalTiles: Tile[] = [firstTile];
    const horizontalTiles: Tile[] = [firstTile];
   
    // find vertical selections 
    let findVerticalId: number = firstTile.id+1;
    for(let index = 0; index < formValue.numberOfColumns; index++){
     
      let nextVerticalTile = this.selectedTiles.find((title:Tile)=>title.id == findVerticalId);
      if(nextVerticalTile) {
        verticalTiles.push(nextVerticalTile);
        ++findVerticalId;
      }
    }
     // find horizontal selections 
     let findHorizontalId : number = firstTile.id + formValue.numberOfColumns;
     for(let index = 0; index < formValue.numberOfRows; index++){
      let nextHorizontalTile = this.selectedTiles.find((title:Tile)=>title.id == findHorizontalId);
      if(nextHorizontalTile){
        horizontalTiles.push(nextHorizontalTile);
        findHorizontalId = findHorizontalId + formValue.numberOfColumns;
      }
    }

     
    if(horizontalTiles.length == formValue.numberOfMergeCellsPerTime ||
       verticalTiles.length == formValue.numberOfMergeCellsPerTime ||
       formValue.numberOfMergeCellsPerTime == horizontalTiles.length * verticalTiles.length){

      const mergeTile : Tile = {
        id: firstTile.id,
        rows: horizontalTiles.length,
        cols: verticalTiles.length,
        color: 'blue',
        selected: true,
        merged: true,
        text:''
      }

      const firstTileIndex = this.tiles.findIndex(d => d.id === firstTile.id); 

      horizontalTiles.forEach((tile:Tile)=>{
        let index = this.tiles.findIndex(d => d.id === tile.id ); 
        if(index >= 0 && firstTileIndex != index)  {
          this.tiles.splice(index, 1);
        }
        let selectedIndex = this.selectedTiles.findIndex(d => d.id === tile.id);
        if(selectedIndex >= 0)  {
          this.selectedTiles.splice(selectedIndex, 1);
        }
      });

      verticalTiles.forEach((tile:Tile)=>{
        let index = this.tiles.findIndex(d => d.id === tile.id ); 
        if(index >= 0 && firstTileIndex != index)  {
          this.tiles.splice(index, 1);
        }
        let selectedIndex = this.selectedTiles.findIndex(d => d.id === tile.id);
        if(selectedIndex >= 0)  {
          this.selectedTiles.splice(selectedIndex, 1);
        }
      });

      this.selectedTiles.forEach((tile:Tile)=>{
        let index = this.tiles.findIndex(d => d.id === tile.id ); 
        if(index >= 0 && firstTileIndex != index)  {
          this.tiles.splice(index, 1);
        }
      });

     
      this.tiles[firstTileIndex] = mergeTile;
      this.selectedTiles= [];

    }else{
      alert("merge mapping is wrong reset and try again");
    }
  }

  next(){
    this.tiles.forEach((tile:Tile)=> {tile.merged = false;  tile.color = 'blue';});
    this.loadingStep = true;
    this.gridService.saveGridTiles(0,this.tiles).subscribe(res=>{
      if(res){

      }
      this.loadingStep = false;
    }, err=>{
      console.error(err); 
      this.loadingStep = false;
    });
  }

}
