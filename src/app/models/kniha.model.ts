export class Kniha {

  id?: string;
  meno_knihy: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.meno_knihy = kniha.meno_knihy;
    this.autor = kniha.autor;
  }

}
