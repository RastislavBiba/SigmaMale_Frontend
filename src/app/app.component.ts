import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finalproject';
  Kus = 0;
  mnozstvo = 0;
  Vysledok=0;
  public pocitaj(){
    this.Vysledok = this.Kus * this.mnozstvo;
  }
  public pracuj(){
    alert("Hello");
  }
}
