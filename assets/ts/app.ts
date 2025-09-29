import { Partecipante } from "./partecipante.js";
import { Corso } from "./corso.js";
import { Azienda } from "./azienda.js";
//Inserire l'estensione .js negli import del file app.ts è una scelta voluta: serve a forzare la generazione di link relativi con l'estensione corretta (.js) anche quando il file app.ts (quello nel quale è stato inserito questo commento) viene traspilato nel file app.js, senza dover ricorrere a un bundler esterno. Ciò evita che il browser vada in errore perché non riesce a importare correttamente i file.
//Ho preso questa decisione per un semplice motivo: trattandosi di un progetto di piccolissime dimensioni, ho ritenuto che aggiungervi un bundler esterno sarebbe stato eccessivo.
//Se, però, in futuro avessi bisogno di ingrandire il progetto (cosa che, secondo me, renderebbe necessaria l'adozione di un bundler), basterà semplicemente rimuovere le tre estensioni, aggiornare il file tsconfig.json (con "moduleResolution": "bundler") e procedere, poi, con la configurazione.


//------------------------------------------------ //
//---------- ISTANZIAMENTO DELLE CLASSI ---------- //
//------------------------------------------------ //

// --- Istanze della classe Partecipante ---//
//Creazione di 10 partecipanti: Amara Diallo, Hassan Al-Rashid, Maria Santos, Fatou Kone e Nicolae Popescu, Aisha Osman, Carlos Mendoza, Ivana Petkovic, Mamdou Traore, Elena Morau
const partecipanteAmaraDiallo = new Partecipante ("Amara", "Diallo", "Senegal", "Diploma di scuola superiore", ["francese", "wolof"], ["artigianatoCeramica"], "Fuggita dalla siccità in Senegal, sogna di aprire un laboratorio di ceramica", "amara.diallo@includo.it")

const partecipanteHassanAlRashid = new Partecipante ("Hassan", "Al Rashid", "Siria", "Laurea ingegneria", ["arabo", "inglese", "italiano"], ["artigianatoFerro"], "Ingegnere siriano, vuole ricostruire la sua vita lavorando con le mani", "hassan.alrashid@includo.it")

const partecipanteMariaSantos = new Partecipante ("Maria", "Santos", "Brasile", "Licenza scuola media", ["portoghese", "spagnolo"], ["sartoria"], "Madre single brasiliana, cerca stabilità per sé e per sua figlia", "maria.santos@includo.it")

const partecipanteFatouKone = new Partecipante ("Fatou", "Koné", "Costa d'Avorio", "Scuola primaria", ["baoule", "francese"], ["alimentare", "ristorazione", "panificazione"], "Vedova ivoriana, ama cucinare e vuole tramandare le ricette della nonna", "fatou.kone@includo.it")

const partecipanteNicolaePopescu = new Partecipante ("Nicolae", "Popescu", "Romania", "Formazione professionale carpentiere", ["rumeno", "italiano"], ["restauro", "artigianatoFerro"], "Ex carpentiere in Italia da più di trent'anni, dopo un incidente cerca una nuova opportunità lavorativa", "nicolae.popescu@includo.it")

const partecipanteAishaOsman = new Partecipante("Aisha", "Osman", "Somalia", "Diploma scuola superiore", ["somalo", "arabo", "inglese"], ["sartoria", "alimentare", "ristorazione"], "Arrivata dalla Somalia, ha sempre amato cucinare e creare vestiti", "aisha.osman@includo.it")

const partecipanteCarlosMendoza = new Partecipante ("Carlos", "Mendoza", "Peru", "Laurea agronomia", ["spagnolo", "quechua", "italiano"], ["agricoltura"], "Agronomo peruviano, vuole unire scienza e tradizione agricola locale", "carlos.mendoza@includo.it")

const partecipanteIvanaPetkovic = new Partecipante ("Ivana", "Petkovic", "Serbia", "Licenza scuola media", ["serbo"], ["artigianatoCeramica", "artigianatoPietra", "artigianatoFerro"], "Artistra frustrata, cerca di esprimere la sua creatività attraverso la materia", "ivana.petkovic@includo.it")

const partecipanteMamadouTraore = new Partecipante ("Mamadou", "Traoré", "Mali", "Scuola primaria", ["bambara", "francese"], ["falegnameria", "restauro"], "Giovane maliano, sogna di diventare maestro falegname come il nonno", "mamadou.traore@includo.it")

const partecipanteElenaMorau = new Partecipante ("Elena", "Morau", "Moldavia", "Diploma scuola superiore", ["moldavo", "rumeno"], ["alimentare", "panificazione"], "Nonna moldava, vuole preservare le antiche ricette di conserve familiari", "elena.morau@includo.it")


// --- Istanze della classe Corso --- //
//Creazione di 7 corsi: italiano, panificazione, sartoria, ferro battuto, restauro, ulivocoltura, ceramica
const corsoItaliano = new Corso ("Corso di italiano come lingua straniera", "italiano", "italiano", "Corso di italiano per stranieri, pensato per comunicare in maniera efficace e destreggiarsi in un mondo totalmente nuovo; consigliato in particolare a chi ha un livello di italiano A2 o inferiore.", 4, 320)

const corsoPanificazione = new Corso ("Panetteria tradizionale", "panificazione", "panificazione", "Corso completo di panificazione tradizionale pugliese, dalle farine tipiche locali all'utilizzo dei forni a legna; include corso per la sicurezza alimentare e HCCP.", 4, 320, 70, 250)

const corsoSartoria = new Corso ("Tessitura, sartoria e ricamo tradizionale", "sartoria", "sartoria", "Apprendimento delle tecniche sartoriali tradizionali e delle tecniche per realizzare i ricami tipici pugliesi; include taglio, cucito sia a mano che a macchina e creazione di decorazioni folkloristiche.", 6, 480, 90, 390)

const corsoFerroBattuto = new Corso ("Maestro del ferro battuto", "ferroBattuto", "artigianatoFerro", "Formazione nella lavorazione artistica del ferro, dalle tecniche di forgiatura tradizionale alla creazione di cancelli, ringhiere e oggetti decorativi; include corsi specifici sulla sicurezza e sull'uso degli strumenti.", 6, 480, 100, 380)

const corsoRestauratore = new Corso ("Restauratore mobili antichi", "restauratore", "restauro", "Corso per apprendere le tecniche di restauro conservativo di mobili d'epoca e del trattamento di legno e decorazioni tradizionali; include panoramica per il riconoscimento degli stili decorativi e il loro trattamento.", 7, 560, 100, 460)

const corsoUliveti = new Corso ("Olivicoltore e frantoniano", "uliveti", "agricoltura", "Corso completo sulla coltivazione degli ulivi e sulla produzione dell'olio extra-vergine, dalle tecniche di coltivazione tradizionali alle innovazioni tecnologiche più recenti; include insegnamento della gestione del frantoio. ATTENZIONE: il corso è stagionale.", 9, 720, 120, 600)

const corsoCeramica = new Corso ("Ceramica artistica e decorativa", "ceramica", "artigianatoCeramica", "Corso intensivo per apprendere le tecniche tradizionali della ceramica pugliese, dalla lavorazione dell'argilla alla decorazione con motivi locali; oltre alla decorazione, il corso comprende l'uso del tornio, la cottura della ceramica e la smaltatura.", 6, 480, 100, 380)


// --- Istanze della classe Azienda --- //
//Creazione di 8 aziende: Oleificio San Giuseppe, Mediterra - Ceramiche d'Arte, Panificio Tradizioni di Grano, Ferro Battuto Meridionale, Falegnameria Radici, Atelier Fili d'Oro, Sartoria Tessuti del Sud + Agriturismo Masseria dei Tramonti, che organizza workshop per turisti
const aziendaSanGiuseppe = new Azienda ("Oleificio San Giuseppe", "uliveti", "Frantoio familiare attivo dal 1952 e specializzato nella produzione di olio extravergine di oliva biologico; gestisce 200 ettari di uliveti e un moderno frantoio che combina tecniche tradizionali e innovative.", ["Operatore frantoiano", "Addetto coltivazione uliveti"])

const aziendaMediterra = new Azienda ("Mediterra Ceramiche d'Arte", "ceramica", "Laboratorio artigianale specializzato in ceramiche decorative tradizionali pugliesi. Produce oggetti per l'arredamento, stoviglie artistiche e pezzi su commissione per hotel e ristoranti.", ["Ceramista junior", "Decoratore ceramico"])

const aziendaTradizioniGrano = new Azienda ("Panificio Tradizioni di Grano", "panificazione", "Panificio artigianale che utilizza farine locali e lievito madre per produrre pane, focacce e altri prodotti tipici pugliesi. Fornisce ristoranti, hotel e mercati locali.", ["Panettiere", "Addetto vendita specializzato"])

const aziendaFerroBattutoMeridionale = new Azienda ("Ferro Battuto Meridionale",
"ferroBattuto", "Officina specializzata in cancelli, ringhiere e complementi d'arredo in ferro battuto. Lavora per privati, comuni e strutture turistiche per la realizzazione di opere su misura.", ["Fabbro specializzato", "Apprendista saldatore"])

const aziendaRadici = new Azienda ("Falegnameria Radici", "restauratore", "Laboratorio di falegnameria tradizionale specializzato in mobili su misura, restauri e oggetti in legno massello. Utilizza essenze locali e tecniche di incastro tradizionali.", ["Falegname qualificato", "Addetto al restauro mobili"])

const aziendaFiliOro = new Azienda ("Atelier Fili d'Oro", "sartoria", "Laboratorio sartoriale specializzato in abiti tradizionali pugliesi, costumi folkloristici e ricami artistici. Collabora con gruppi locali e produce per il mercato turistico.", ["Sarta specializzata", "Ricamatore o ricamatrice"])

const aziendaTessutiSud = new Azienda ("Tessuti del Sud", "sartoria", "Laboratorio di tessitura artigianale che produce tessuti per l'arredamento e l'abbigliamento utilizzando fibre naturali locali.", ["Tessitore esperto", "Addetto preparazione filati"])

const aziendaMasseriaTramonti = new Azienda ("Agriturismo Masseria dei Tramonti", "varie", "Struttura turistica di 15 camere con ristorante tipico, fattoria didattica e laboratori artigianali. Organizza workshop turistici sui mestieri tradizionali da proporre ai suoi ospiti", ["Addetto ai laboratori didattici", "Animatore workshop"])


//---------------------------------- //
//---------- TESTING ZONE ---------- //
//---------------------------------- //

//Log in console di due partecipanti
console.log(partecipanteAmaraDiallo)
console.log(partecipanteElenaMorau)

//Log in console di due corsi
console.log(corsoRestauratore)
console.log(corsoItaliano)

//Log in console di due aziende
console.log(aziendaSanGiuseppe)
console.log(aziendaMediterra)


//Iscrizione di Nicolae Popescu e Ivana Petkovic al corso di ferro battuto
partecipanteNicolaePopescu.iscrivitiCorso(corsoFerroBattuto)
partecipanteIvanaPetkovic.iscrivitiCorso(corsoFerroBattuto)

//Aggiunta del partecipante Hassan Al Rashid al corso di ferro battuto
corsoFerroBattuto.aggiungiPartecipante(partecipanteHassanAlRashid)

//Visualizzazione dell'elenco dei partecipanti iscritti al corso di ferro battuto
corsoFerroBattuto.mostraIscritti()

//Visualizzazione del corso di ferro battuto (l'elenco iscritti qui compreso è completo di tutte le schede dei partecipanti)
console.log(corsoFerroBattuto)

//Offerta di posizione lavorativa come ricamatrice a Maria Santos da parte dell'Atelier Fili d'Oro
aziendaFiliOro.offriPosizione(partecipanteMariaSantos, "Ricamatore o ricamatrice")