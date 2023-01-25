import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'rickandMorty';

  constructor(private dataSvc:DataService){}

  ngOnInit(){
    this.dataSvc.getPersonajes().subscribe( data => console.log(data) )
  }

  }

