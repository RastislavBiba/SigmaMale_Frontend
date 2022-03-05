export class Osoba {

  meno: string;
  priezvisko: string;

  constructor(osoba: Osoba) {
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
  }

}
