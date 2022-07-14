import {Request, Response} from 'express';
import {TILES,save, getTile} from "./data-store";
import {setTimeout} from 'timers';

export function saveTiles(req:Request, res: Response){
    const emitError = req.params["emit_error"];
    if(emitError=="1"){
        res.status(500).json({message: 'Programmatically Caused Error'});
    }else{
        setTimeout(() => {
            save(req.body);
            res.status(200).json({payload:Object.values(getTile())});
       }, 1500);
    }
}