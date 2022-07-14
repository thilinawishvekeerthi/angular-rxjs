import {Request, Response} from 'express';
import {TILES} from './data-store';

export function getGridTiles(req : Request, res: Response){
    const emitError = req.params["emit_error"];
    if(emitError=="1"){
        res.status(500).json({message: 'Programmatically Caused Error'});
    }else{
        setTimeout(() => {
            res.status(200).json({payload:Object.values(TILES)});
       }, 1500);
    }
    
}