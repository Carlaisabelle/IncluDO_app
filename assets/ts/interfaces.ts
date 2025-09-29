// --- ICorso --- //
//Quella che descrive i corsi formativi proposti da IncluDO
//L'interfaccia prevede delle proprietà opzionali, come la suddivisione di ore tra teoria e pratica. Questo perché, quando vengono progettati e inseriti dei nuovi corsi, non sempre è possibile decidere in modo netto quante saranno le ore di teoria e quante quelle di pratica (un esempio: il corso di lingua italiana, in cui le ore di teoria e quelle di pratica sono indistinte).
//Un discorso simile vale per "durataOre": ho immaginato il caso limite di un corso tenuto da un professionista del settore (come, ad esempio, un lavoratore di un mestiere manuale) che viene chiamato da IncluDO per insegnare il suo lavoro. Magari il professionista, che non ha mai dovuto progettare dei corsi di formazione, sa fare una stima di quanti mesi servono per completare il corso, ma non sa da quante ore siano composti questi mesi né tantomeno come dovrebbe suddividerli tra ore di teoria e ore di pratica. Per casi limite simili, quindi, anche "durataOre" è opzionale.
export interface ICorso {
  titoloCorso: string;
  idCorso: string;
  settoreProfessionale: string;
  descrizioneCorso: string;
  durataMesi: number;
  durataOre?: number;
  oreTeoria?: number;
  orePratica?: number;

  aggiungiPartecipante(partecipante: IPartecipante): void;
  mostraIscritti(): void;
}


// --- IPartecipante --- //
//Quella che descrive ogni partecipante al progetto IncluDO
export interface IPartecipante {
  nome: string;
  cognome: string;
  paeseOrigine: string;
  livelloIstruzione: string;
  competenzeLingue: string[];
  ambitoInteresse: string[];
  storia: string;
  contatto: string;

  iscrivitiCorso(corso: ICorso): void;
}


// --- IAzienda --- //
//Quella che descrive le aziende partner del progetto IncluDO
//Queste aziende possono proporre delle posizioni lavorative/di stage ai partecipanti ai corsi InclduDO.
//Anche questa interfaccia prevede un parametro opzionale: in questo momento tutte le aziende hanno almeno una posizione aperta, ma potrebbe capitare che ce ne siano alcune che, in un determinato momento, non abbiano posizioni da offrire ma che vadano comunque mantenute all'interno dell'applicazione (magari perché continuano a collaborare con IncluDO, oppure perché potrebbero offrirne altre in futuro).
export interface IAzienda {
  nomeAzienda: string;
  corsoRichiesto: string;
  descrizioneAzienda: string;
  posizioniAperte?: string[];

  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
