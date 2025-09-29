//Import dell'interfaccia IPartecipante per la classe Partecipante
//Import anche dell'interfaccia ICorso, che servirà nel metodo "iscrivitiCorso()"
import { IPartecipante, ICorso } from "./interfaces";


// --- PARTECIPANTE --- //
export class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseOrigine: string,
    public livelloIstruzione: string,

    //Per quanto riguarda le competenze linguistiche:
    //chi ha una competenza di italiano di livello B1 o superiore HA la stringa "italiano" all'interno dell'array;
    //chi, invece, ha una competenza di italiano di livello A2 o inferiore NON HA la stringa "italiano" all'interno dell'array.
    //In questo modo, si potrà semplicemente filtrare l'array delle lingue parlate da un partecipante (per vedere se l'italiano lo conosce a livello da intermedio in su oppure no) se, in futuro, sarà necessario implementare qualcosa che tenga conto della conoscenza dell'italiano.
    //La valutazione del livello della lingua viene fatta presumibilmente dal personale di IncluDO al di fuori dello scopo di questa applicazione, ed è quindi loro premura indicare oppure no la conoscenza dell'italiano del partecipante.
    public competenzeLingue: string[],

    public ambitoInteresse: string[],
    public storia: string,
    public contatto: string
  ) {}

  //Il metodo interagisce il metodo "aggiungiPartecipante()", contenuto nella classe Corso, che prende il partecipante che si iscrive a un corso e lo inserisce all'array delle persone iscritte a quel corso (chiamato "elencoIscritti").
  iscrivitiCorso(corso: ICorso): void {
    corso.aggiungiPartecipante(this);
    console.log(
      `(MESSAGGIO DAL METODO "ISCRIVITI CORSO" dentro il partecipante ${this.nome} ${this.cognome}) => ${this.nome} ${this.cognome} è ora tra i partecipanti al corso "${corso.titoloCorso}" (id corso: ${corso.idCorso})`
    );

    //Qui ci sarebbe un alert che comunica al/la partecipante che la sua iscrizione al corso che ha scelto è avvenuta con successo
    // alert(
    //   `La tua iscrizione al corso "${corso.titoloCorso}" è avvenuta con successo!`
    // );
  }
}
