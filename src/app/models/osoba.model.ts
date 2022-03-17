export class Osoba {
  id?: string;
  meno: string;
  priezvisko: string;

  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
  }
}
