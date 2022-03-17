export class Vypozicka{
  id?: string;
  osoba: string;
  kniha: string;



  constructor(vypozicka: Vypozicka) {
    this.id = vypozicka.id;
    this.osoba = vypozicka.osoba;
    this.kniha = vypozicka.kniha;
  }
}
