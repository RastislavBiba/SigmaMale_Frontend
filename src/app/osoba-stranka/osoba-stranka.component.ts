import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Osoba} from '../models/osoba.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-osoba-stranka',
  templateUrl: 'osoba-stranka.component.html',
  styleUrls: ['osoba-stranka.component.css']
})
export class OsobaStrankaComponent implements OnInit {

  osoby: Osoba[] = [];

  osobaNaUpravu?: Osoba;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    console.log('1');
    const vysledok: Observable<Osoba[]> = this.http.get<Osoba[]>('http://localhost:8080/api/customers');
    vysledok.subscribe(data => {
      console.log('prislo:' + data);
    });
    console.log('2');
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void {
    this.osoby.push(osoba);
  }

  uprav(osoba: Osoba): void {
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1) {
      this.osoby[index] = osoba;
    }
  }

  upravZoZoznamu(osoba: Osoba): void {
    this.osobaNaUpravu = osoba;
  }

  zmazZoZoznamu(osoba: Osoba): void {
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1) {
      this.osoby.splice(index, 1);
    }
  }
}
