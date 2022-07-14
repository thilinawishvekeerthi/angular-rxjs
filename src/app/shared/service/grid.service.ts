import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)
export class GridService{
    constructor(private http: HttpClient){

    }

    loadGridTiles(emitError: number): Observable<any>{
        return  this.http.get<any>(`api/tiles/${emitError}`);
    }

    saveGridTiles(emitError: number, changes: any):Observable<any>{
        return this.http.put(`api/tiles/${emitError}`, changes);
    }

}