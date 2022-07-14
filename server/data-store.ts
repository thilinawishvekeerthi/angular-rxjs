export let TILES: any = [
    {id : 0,text: 'One', cols: 1, rows: 2, color: 'blue', selected : false,   merged: true},
    {id : 0,text: 'Two', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Three', cols: 2, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Four', cols: 1, rows: 2, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'One', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Two', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Three', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Four', cols: 2, rows: 2, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Four', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
    {id : 0,text: 'Four', cols: 1, rows: 1, color: 'blue', selected : false, merged: true},
]

export function save(tiles: any){
    TILES = tiles;
}

export function getTile(){
    return TILES;
}