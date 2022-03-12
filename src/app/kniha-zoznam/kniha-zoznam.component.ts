import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent {



  @Input()
  books: Kniha[] = []

  @Output()
  upravKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();
  constructor() { }


  uprav(kniha: Kniha):void {
    this.upravKnihu.emit(kniha);
  }

}
