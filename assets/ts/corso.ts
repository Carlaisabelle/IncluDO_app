//Import dell'interfaccia ICorso per la creazione della classe Corso
//Import anche dell'interfaccia IPartecipante, usata nel metodo "aggiungiPartecipante()"
import { ICorso, IPartecipante } from "./interfaces";


// --- CORSO --- //
//La classe Corso gestisce la logica di iscrizione a un corso con il metodo "aggiungiPartecipante()", che prende il partecipante e lo aggiunge all'array "elencoIscritti".
export class Corso implements ICorso {
  
  //"elencoIscritti[]": l'array vuoto in cui verranno inserite "le schede" dei partecipanti che verranno iscritti (o si iscriveranno) a un corso.
  //Viene inizalizzato un array vuoto per fare in modo che la proprietà esista sempre 
  public elencoIscritti: IPartecipante[];

  //Costruttore della classe Corso
  constructor(
    public titoloCorso: string,
    public idCorso: string,
    public settoreProfessionale: string,
    public descrizioneCorso: string,
    public durataMesi: number,
    public durataOre?: number,
    public oreTeoria?: number,
    public orePratica?: number
  ) {
    //Array "elencoIscritti"
    //Nell'array viene salvato l'intero oggetto partecipante: è pensato come il cassetto di un archivio, in cui si trovano le schede complete dei partecipanti che sono iscritti a un corso.
    //Per visualizzare solo l'elenco (nome e cognome) degli iscritti a un corso, c'è il metodo "mostraIscritti()" che si trova in fondo a questa classe.
    this.elencoIscritti = [];
  }

  //Il metodo "aggiungiPartecipante()": se un partecipante si iscrive a un corso (con il metodo "iscrivitiCorso()" contenuto dentro la classe Partecipante), il programma se ne accorge, prende il partecipante e lo inserisce nell'array delle persone iscritte (ovvero: "elencoIscritti").
  //Non bisogna ricorre per forza a "iscrivitiCorso()", però, per poter usare questo metodo: può anche essere invocato da solo, a partire da un'istanza della classe Corso.
  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.elencoIscritti.push(partecipante);
    console.log(
      `(MESSAGGIO DAL METODO "AGGIUNGI PARTECIPANTE" del corso "${this.titoloCorso}") => ${partecipante.nome} ${partecipante.cognome} è ora nell'elenco dei partecipanti al corso "${this.titoloCorso}" (id corso: ${this.idCorso})`
    );
    
    //Qui ci sarebbe un alert che conferma che l'iscrizione del/la partecipante è avvenuta con successo
    // alert(
    //   `L'iscrizione al corso "${this.titoloCorso}" di ${partecipante.nome} ${partecipante.cognome} è avvenuta con successo!`
    // );
  }

  //Il metodo "mostraIscritti()", che permette di visualizzare un elenco dei partecipanti (nome e cognome) iscritti a un corso.
  mostraIscritti(): void {
    const iscritti = this.elencoIscritti.map(
      (iscritto) => iscritto.nome + " " + iscritto.cognome
    );
    console.log(
      `Iscritti al corso "${this.titoloCorso}": ${iscritti.join("; ")}.`
    );
  }
}