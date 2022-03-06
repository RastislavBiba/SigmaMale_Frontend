import { Component} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent {
  kniha: Kniha[] = []
  constructor() { }

}
