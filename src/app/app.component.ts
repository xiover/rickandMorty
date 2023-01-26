import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Personaje, ResponsePersonaje } from './models/city/personaje.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'rickandMorty';
  characters: Personaje[] = [];
  asdas = 'holas'
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getPersonajes().subscribe((response: ResponsePersonaje) => {
      this.characters = response.results;
    })
  }

}

