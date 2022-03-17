import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-kniha-formular',
  templateUrl: 'kniha-formular.component.html',
  styleUrls: ['kniha-formular.component.css']
})
export class KnihaFormularComponent{


  @Output()
  pridajKnihu = new EventEmitter<Kniha>();
  @Output()
  upravKnihu = new EventEmitter<Kniha>();

  @Input()
  set kniha(k: Kniha | undefined) {
    if (k) {
      this.naplnForm(k)
    }
  }

  formular:FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      meno_knihy: new FormControl(null),
      autor: new FormControl(null)
    });
  }
  public pridaj(): void {

    this.pridajKnihu.emit({id: Math.random().toString(),meno_knihy: this.formular.value.meno_knihy, autor: this.formular.value.autor});
    //this.osoba.meno="";
    //this.osoba.priezvisko="";
    this.formular.reset();
  }

  public uprav(): void {
    this.upravKnihu.emit(this.formular.value);
    //this.osoba.meno="";
    //this.osoba.priezvisko="";
    this.formular.reset();
  }
  public zrus(): void {
    this.formular.reset();
  }
  private naplnForm(kniha: Kniha): void {

    this.formular.controls['id'].setValue(kniha.id);
    this.formular.controls['meno_knihy'].setValue(kniha.meno_knihy);
    this.formular.controls['autor'].setValue(kniha.autor);
  }
}
