import {Component, EventEmitter, Input, Output} from '@angular/core';
import{Vypozicka} from "../models/vypozicka.model";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-vypozicka-formular',
  templateUrl: 'vypozicka-formular.component.html',
  styleUrls: ['vypozicka-formular.component.css']
})

export class VypozickaFormularComponent {

  @Output()
  pridajVypozicku = new EventEmitter<Vypozicka>();
  @Output()
  upravVypozicku = new EventEmitter<Vypozicka>();

  @Input()
  set vypozicky(v: Vypozicka | undefined){
    if(v){
      this.naplnForm(v)
    }
  }
  formular: FormGroup;
  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      kniha: new FormControl(null),
      osoba: new FormControl(null)
    });
  }
  public pridaj(): void {
    this.pridajVypozicku.emit({
      id: Math.random().toString(),
      kniha: this.formular.value.kniha,
      osoba: this.formular.value.osoba
      });
    this.formular.reset();
  }

  public uprav(): void {
    this.upravVypozicku.emit(this.formular.value);
    this.formular.reset();
  }

  public zrus(): void {
    this.formular.reset();
  }
  private naplnForm(vypozicka: Vypozicka): void {
    this.formular.controls['id'].setValue(vypozicka.id);
    this.formular.controls['book'].setValue(vypozicka.kniha);
    this.formular.controls['user'].setValue(vypozicka.osoba);
  }


}
