import { Component, OnInit } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent {

  osoby: Osoba[] = [];
  aktOsoba: Osoba = {meno:'aaa', priezvisko:'bbb'};
  pridaj(osoba: Osoba): void {
    this.osoby.push(osoba);

  }

  uprav(osoba: Osoba):void{
    const index = this.osoby.findIndex(osobaZPola => osobaZPola.id === osoba.id);
    if (index !== -1) {
      this.osoby[index] = osoba;
    }
  }

  upravZoZoznamu(osoba: Osoba):void{
    this.aktOsoba = osoba;
  }


}
