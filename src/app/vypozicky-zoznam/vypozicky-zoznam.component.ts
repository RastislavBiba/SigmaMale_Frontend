import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";


@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent {

  @Input()
  vypozicky: Vypozicka[] = []

  @Output()
  upravVypozicku: EventEmitter<Vypozicka> = new EventEmitter<Vypozicka>();

  @Output()
  zmazVypozicku: EventEmitter<Vypozicka> = new EventEmitter<Vypozicka>();

  uprav(vypozicka: Vypozicka): void {
    this.upravVypozicku.emit(vypozicka);
  }

  zmaz(vypozicka: Vypozicka): void {
    this.zmazVypozicku.emit(vypozicka);
  }
}
