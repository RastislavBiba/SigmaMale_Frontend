export class Vypozicka{
  id: number;
  osoba: string;
  kniha: string;


  constructor(vypozicka: Vypozicka) {
    this.id = vypozicka.id;
    this.osoba = vypozicka.osoba;
    this.kniha = vypozicka.kniha;
  }
}
