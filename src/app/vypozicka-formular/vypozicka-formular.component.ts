import { Component, OnInit } from '@angular/core';
import{Vypozicka} from "../models/vypozicka.model";
@Component({
  selector: 'app-vypozicka-formular',
  templateUrl: './vypozicka-formular.component.html',
  styleUrls: ['./vypozicka-formular.component.css']
})
export class VypozickaFormularComponent {

  vypozicka: Vypozicka = {id: 123, kniha: 'bbb', osoba: 'ccc'}

  constructor() {
  }

}
