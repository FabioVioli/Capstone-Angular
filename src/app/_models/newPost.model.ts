export class newPost {
  username: string ;
  titolo: string;
  skills: string[] = [];
  annuncio: string;

  constructor(username: string, titolo: string, annuncio: string){
    this.username =username;
    this.titolo = titolo;
    this.annuncio = annuncio;
  }
}
