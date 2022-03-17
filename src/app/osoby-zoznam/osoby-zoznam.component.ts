import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from '../models/osoba.model';

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: 'osoby-zoznam.component.html',
  styleUrls: ['osoby-zoznam.component.css']
})
export class OsobyZoznamComponent {

  @Input()
  osoby: Osoba[] = [];

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  @Output()
  zmazOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  uprav(osoba: Osoba): void {
    this.upravOsobu.emit(osoba);
  }

  zmaz(osoba: Osoba): void {
    this.zmazOsobu.emit(osoba);
  }
}
