import { Component, OnInit } from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: 'kniha-stranka.component.html',
  styleUrls: ['kniha-stranka.component.css']
})
export class KnihaStrankaComponent implements OnInit{

  books: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private http: HttpClient){}

  ngOnInit(): void{
    console.log('1');
    const vysledok: Observable<Kniha[]> = this.http.get<Kniha[]>('http://localhost:8080/api/books');
    vysledok.subscribe(data => {
    console.log('prislo:' + data);
    });
    console.log('2');
    }
    pridaj(kniha: Kniha): void {
    this.books.push(kniha);

  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  uprav(kniha: Kniha):void{
    const index = this.books.findIndex(knihaZPola => knihaZPola.id === kniha.id);
    if (index !== -1) {
      this.books[index] = kniha;
    }
  }

  upravZoZoznamu(kniha: Kniha):void{
    this.knihaNaUpravu = kniha;
  }

  zmazZoZoznamu(kniha: Kniha): void {
    const index = this.books.findIndex(knihaArray => knihaArray.id === kniha.id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
