import { Injectable } from "@angular/core";
import { ResponsePersonaje } from "./models/city/personaje.interface";
//import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { endpoints } from "./enums/endpoints";

@Injectable({
   providedIn: 'root'
})
export class DataService{   
    constructor(private http: HttpClient){}

    getPersonajes(){
        return this.http.get<ResponsePersonaje>(endpoints.baseUrl+endpoints.personaje)
    }

}
