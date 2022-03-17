import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent {
  vypozicky: Vypozicka[] = [];

  vypozickaNaUpravu?: Vypozicka;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    console.log('1');
    const vysledok: Observable<Vypozicka[]> = this.http.get<Vypozicka[]>('http://localhost:8080/api/customers');
    vysledok.subscribe(data => {
      console.log('prislo:' + data);
    });
    console.log('2');
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vypozicka: Vypozicka): void {
    this.vypozicky.push(vypozicka);
  }

  uprav(vypozicka: Vypozicka): void {
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.id === vypozicka.id);
    if (index !== -1) {
      this.vypozicky[index] = vypozicka;
    }
  }
  upravZoZoznamu(vypozicka: Vypozicka): void {
    this.vypozickaNaUpravu = vypozicka;
  }

  zmazZoZoznamu(vypozicka: Vypozicka): void {
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.id === vypozicka.id);
    if (index !== -1) {
      this.vypozicky.splice(index, 1);
    }
  }
}
