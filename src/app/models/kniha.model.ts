export class Kniha {

  meno_knihy: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.meno_knihy = kniha.meno_knihy;
    this.autor = kniha.autor;
  }

}
