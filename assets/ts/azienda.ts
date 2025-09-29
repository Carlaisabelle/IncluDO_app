//Import dell'interfaccia IAzienda per la classe Azienda
//Import anche dell'interfaccia IPartecipante che serve per il metodo "offriPosizione()"
import { IAzienda, IPartecipante } from "./interfaces";


// --- AZIENDA --- //
export class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public corsoRichiesto: string,
    public descrizioneAzienda: string,
    public posizioniAperte?: string[]
  ) {}

  //Questo metodo serve per offrire una posizione lavorativa a un partecipante: può essere invocato da un'azienda (ipotizzo che ogni azienda, nell'applicazione, abbia una sua pagina a partire dalla quale possa selezionare un/a partecipante e offrirgli/le una posizione lavorativa a scelta tra quelle che ha);
  //Il metodo inoltra al partecipante il titolo dell'offerta lavorativa con un messaggio pre-compilato nel quale lo/a si invita a contattare la segreteria di IncluDO, che spiegherà la natura della posizione e lo/a aiuterà a contattare l'azienda in questione.
  //Siccome il messaggio precompilato prevede che il partecipante si metta in contatto con il team di IncluDO, ho anche previsto l'invio di un messaggio precompilato alla segreteria che li informa dell'avvenuta proposta.
  //Il metodo invia anche un messaggio di conferma all'azienda.
  offriPosizione(partecipante: IPartecipante, posizione: string): void {

    //Il messaggio precompilato che dice al/la partecipante che ha ricevuto un'offerta
    const messaggioOfferta = `Ciao, ${partecipante.nome}! ${this.nomeAzienda} ha notato il tuo lavoro e vorrebbe proporti questa posizione: ${posizione}. Facci sapere se ti interessa, così ti metteremo in contatto con loro! Il team IncluDO`;

    //Il messaggio precompilato che comunica alla segreteria di IncluDO che un'azienda ha proposto una posizione lavorativa a un/a partecipante
    const messaggioSegreteria = `Ciao! Comunicazione di servizio: ${this.nomeAzienda} ha proposto una posizione ("${posizione}") a ${partecipante.nome} ${partecipante.cognome}. Il team IncluDO`;

    //Il messaggio precompilato che comunica all'azienda che l'email è stata inviata con successo
    const messaggioConfermaAzienda = `Salve, ${this.nomeAzienda}! Confermiamo che l'invio dell'email a ${partecipante.nome} ${partecipante.cognome} per la posizione: "${posizione}" è avvenuto con successo. Grazie! Il team IncluDO`;

    //Il console log serve a simulare l'invio dell'email
    console.log(
      `(Simulazione invio email al/la partecipante) => ${messaggioOfferta}`
    );
    console.log(
      `(Simulazione di invio email alla segreteria di IncluDO) => ${messaggioSegreteria}`
    );
    console.log(
      `(Simulazione di invio email all'azienda') => ${messaggioConfermaAzienda}`
    );

    //Qui ci sarebbe anche un alert che comunica immediatamente all'azienda che l'invio è avvenuto con successo
    // alert(
    //   `Il messaggio a ${partecipante.nome} ${partecipante.cognome} è stato inviato con successo!`
    // );
  }
}
