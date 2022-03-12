import { Component, OnInit } from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent {
  //books: any[] = [];



  books: Kniha[] = [];
  aktKniha: Kniha = {meno_knihy:'aaa', autor:'bbb'};
  pridaj(kniha: Kniha): void {
    this.books.push(kniha);

  }

  uprav(kniha: Kniha):void{
    const index = this.books.findIndex(knihaZPola => knihaZPola.id === kniha.id);
    if (index !== -1) {
      this.books[index] = kniha;
    }
  }

  upravZoZoznamu(kniha: Kniha):void{
    this.aktKniha = kniha;
  }

}
