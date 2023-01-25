import { Injectable } from "@angular/core";
import { Personaje } from "./models/city/personaje.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
   providedIn: 'root'
})
export class DataService{
    private UrlPersonaje='https://rickandmortyapi.com/api/character';    
    constructor(private http: HttpClient){}

    getPersonajes():Observable<Personaje[]>{
        return this.http.get<Personaje[]>(this.UrlPersonaje)
    }

}
