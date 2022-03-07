import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: './osoby-zoznam.component.html',
  styleUrls: ['./osoby-zoznam.component.css']
})
export class OsobyZoznamComponent {


  @Input()
  osoby: Osoba[] = []

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();
  constructor() { }


  uprav(osoba: Osoba):void {
    this.upravOsobu.emit(osoba);
  }
}
