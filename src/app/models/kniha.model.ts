export class Kniha {

  id: number;
  meno_knihy: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.meno_knihy = kniha.meno_knihy;
    this.autor = kniha.autor;
  }

}
