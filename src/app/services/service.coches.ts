import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Injectable } from "@angular/core";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches{

    constructor(private _http:HttpClient){}

    getCoches(): Promise<any>{
        let url = environment.urlApiCoches;
        let request = "api/Coches";
        let promise = new Promise((resolve)=>{
            this._http.get(url + request).subscribe(response=>{
                console.log(response)
                resolve(response)
            })
        })
        return promise;
    }

    createCoche(coche: Coche): Promise<any>{
        let url = environment.urlApiCoches;
        let request = "api/Coches/InsertCoche";
        let promise = new Promise((resolve)=>{
            this._http.post(url + request, coche).subscribe(response=>{
                resolve(response);
            })
        })
        return promise;
    }

    deleteCoche(idcoche: number): Promise<any>{
        let url = environment.urlApiCoches;
        let request = "api/Coches/DeleteCoche/" + idcoche;
        let promise = new Promise((resolve)=>{
            this._http.delete(url + request).subscribe(response=>{
                resolve(response);
            })
        })
        return promise;
    }

}