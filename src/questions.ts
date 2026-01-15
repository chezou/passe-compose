export interface Question {
  verb: string;
  sentence: string;
  answer: "être" | "avoir";
  translation: string;
  hint: string;
}

export const questions: Question[] = [
  // Original 20 questions
  { verb: "manger", sentence: "J'___ mangé une pomme.", answer: "avoir", translation: "to eat", hint: "Regular verb → avoir" },
  { verb: "aller", sentence: "Elle ___ allée au cinéma.", answer: "être", translation: "to go", hint: "Movement verb → être" },
  { verb: "venir", sentence: "Ils ___ venus hier.", answer: "être", translation: "to come", hint: "Movement verb → être" },
  { verb: "faire", sentence: "Nous ___ fait nos devoirs.", answer: "avoir", translation: "to do/make", hint: "Regular verb → avoir" },
  { verb: "partir", sentence: "Tu ___ parti(e) tôt.", answer: "être", translation: "to leave", hint: "Movement verb → être" },
  { verb: "voir", sentence: "J'___ vu un film.", answer: "avoir", translation: "to see", hint: "Regular verb → avoir" },
  { verb: "arriver", sentence: "Marie ___ arrivée en retard.", answer: "être", translation: "to arrive", hint: "Movement verb → être" },
  { verb: "prendre", sentence: "Il ___ pris le bus.", answer: "avoir", translation: "to take", hint: "Regular verb → avoir" },
  { verb: "naître", sentence: "Je ___ né(e) en 1990.", answer: "être", translation: "to be born", hint: "State change verb → être" },
  { verb: "lire", sentence: "Elle ___ lu ce livre.", answer: "avoir", translation: "to read", hint: "Regular verb → avoir" },
  { verb: "descendre", sentence: "Nous ___ descendus.", answer: "être", translation: "to go down", hint: "Movement verb → être" },
  { verb: "écrire", sentence: "Tu ___ écrit une lettre.", answer: "avoir", translation: "to write", hint: "Regular verb → avoir" },
  { verb: "mourir", sentence: "Il ___ mort en 1900.", answer: "être", translation: "to die", hint: "State change verb → être" },
  { verb: "dormir", sentence: "J'___ dormi 8 heures.", answer: "avoir", translation: "to sleep", hint: "Regular verb → avoir" },
  { verb: "tomber", sentence: "Elle ___ tombée.", answer: "être", translation: "to fall", hint: "Movement verb → être" },
  { verb: "boire", sentence: "Nous ___ bu du café.", answer: "avoir", translation: "to drink", hint: "Regular verb → avoir" },
  { verb: "rester", sentence: "Ils ___ restés à la maison.", answer: "être", translation: "to stay", hint: "State verb → être" },
  { verb: "devenir", sentence: "Elle ___ devenue médecin.", answer: "être", translation: "to become", hint: "State change verb → être" },
  { verb: "parler", sentence: "J'___ parlé français.", answer: "avoir", translation: "to speak", hint: "Regular verb → avoir" },
  { verb: "monter", sentence: "Tu ___ monté(e) les escaliers.", answer: "être", translation: "to go up", hint: "Movement verb → être" },

  // Additional ~80 questions for 5x expansion
  { verb: "rentrer", sentence: "Nous ___ rentrés tard hier soir.", answer: "être", translation: "to return (home)", hint: "Movement verb → être" },
  { verb: "sortir", sentence: "Ils ___ sortis avec des amis.", answer: "être", translation: "to go out", hint: "Movement verb → être" },
  { verb: "entrer", sentence: "Elle ___ entrée dans la salle.", answer: "être", translation: "to enter", hint: "Movement verb → être" },
  { verb: "retourner", sentence: "Je ___ retourné(e) en France l'année dernière.", answer: "être", translation: "to return", hint: "Movement verb → être" },
  { verb: "passer", sentence: "Nous ___ passés par le parc.", answer: "être", translation: "to pass by", hint: "Movement verb → être (passer par)" },

  { verb: "avoir", sentence: "J'___ eu une bonne idée.", answer: "avoir", translation: "to have", hint: "Auxiliary verb used with avoir" },
  { verb: "être", sentence: "Elle ___ été très gentille.", answer: "avoir", translation: "to be", hint: "Most state verbs → avoir in passé composé" },
  { verb: "mettre", sentence: "Tu ___ mis la table.", answer: "avoir", translation: "to put", hint: "Regular verb → avoir" },
  { verb: "ouvrir", sentence: "Ils ___ ouvert la fenêtre.", answer: "avoir", translation: "to open", hint: "Regular verb → avoir" },
  { verb: "apprendre", sentence: "Nous ___ appris le français.", answer: "avoir", translation: "to learn", hint: "Regular verb → avoir" },

  { verb: "comprendre", sentence: "J'___ compris la question.", answer: "avoir", translation: "to understand", hint: "Regular verb → avoir" },
  { verb: "répondre", sentence: "Elle ___ répondu au professeur.", answer: "avoir", translation: "to answer", hint: "Regular verb → avoir" },
  { verb: "attendre", sentence: "Nous ___ attendu le bus.", answer: "avoir", translation: "to wait for", hint: "Regular verb → avoir" },
  { verb: "perdre", sentence: "Il ___ perdu ses clés.", answer: "avoir", translation: "to lose", hint: "Regular verb → avoir" },
  { verb: "choisir", sentence: "Tu ___ choisi ce livre.", answer: "avoir", translation: "to choose", hint: "Regular verb → avoir" },

  { verb: "finir", sentence: "Ils ___ fini leurs devoirs.", answer: "avoir", translation: "to finish", hint: "Regular verb → avoir" },
  { verb: "grandir", sentence: "Elle ___ grandi dans ce village.", answer: "avoir", translation: "to grow up", hint: "Regular verb → avoir" },
  { verb: "réussir", sentence: "Vous ___ réussi l'examen.", answer: "avoir", translation: "to succeed", hint: "Regular verb → avoir" },
  { verb: "entendre", sentence: "J'___ entendu un bruit étrange.", answer: "avoir", translation: "to hear", hint: "Regular verb → avoir" },

  { verb: "courir", sentence: "Ils ___ couru dans le parc.", answer: "avoir", translation: "to run", hint: "Regular verb → avoir" },
  { verb: "rire", sentence: "Nous ___ beaucoup ri.", answer: "avoir", translation: "to laugh", hint: "Regular verb → avoir" },
  { verb: "sourire", sentence: "Elle ___ souri en le voyant.", answer: "avoir", translation: "to smile", hint: "Regular verb → avoir" },
  { verb: "connaître", sentence: "Tu ___ connu cette personne.", answer: "avoir", translation: "to know (be acquainted with)", hint: "Regular verb → avoir" },
  { verb: "savoir", sentence: "Il ___ su la vérité.", answer: "avoir", translation: "to know (a fact)", hint: "Regular verb → avoir" },

  { verb: "vivre", sentence: "Ils ___ vécu à Paris pendant 5 ans.", answer: "avoir", translation: "to live", hint: "Regular verb → avoir" },
  { verb: "tenir", sentence: "J'___ tenu ma promesse.", answer: "avoir", translation: "to keep/hold", hint: "Regular verb → avoir" },
  { verb: "offrir", sentence: "Elle ___ offert un cadeau.", answer: "avoir", translation: "to offer", hint: "Regular verb → avoir" },
  { verb: "recevoir", sentence: "Nous ___ reçu une lettre.", answer: "avoir", translation: "to receive", hint: "Regular verb → avoir" },
  { verb: "permettre", sentence: "Ils ___ permis cette exception.", answer: "avoir", translation: "to allow", hint: "Regular verb → avoir" },

  { verb: "promettre", sentence: "Tu ___ promis de venir.", answer: "avoir", translation: "to promise", hint: "Regular verb → avoir" },
  { verb: "découvrir", sentence: "J'___ découvert un nouveau café.", answer: "avoir", translation: "to discover", hint: "Regular verb → avoir" },
  { verb: "couvrir", sentence: "Elle ___ couvert la table.", answer: "avoir", translation: "to cover", hint: "Regular verb → avoir" },
  { verb: "suivre", sentence: "Nous ___ suivi le guide.", answer: "avoir", translation: "to follow", hint: "Regular verb → avoir" },
  { verb: "battre", sentence: "Ils ___ battu le record.", answer: "avoir", translation: "to beat", hint: "Regular verb → avoir" },

  { verb: "naître", sentence: "Elle ___ née à Lyon.", answer: "être", translation: "to be born", hint: "State change verb → être" },
  { verb: "mourir", sentence: "Ils ___ morts très jeunes.", answer: "être", translation: "to die", hint: "State change verb → être" },
  { verb: "tomber", sentence: "Je ___ tombé(e) dans les escaliers.", answer: "être", translation: "to fall", hint: "Movement verb → être" },
  { verb: "revenir", sentence: "Tu ___ revenu(e) très tard.", answer: "être", translation: "to come back", hint: "Movement verb → être" },
  { verb: "redescendre", sentence: "Nous ___ redescendus après le sommet.", answer: "être", translation: "to go back down", hint: "Movement verb → être" },

  { verb: "repartir", sentence: "Ils ___ repartis le lendemain.", answer: "être", translation: "to leave again", hint: "Movement verb → être" },
  { verb: "ressortir", sentence: "Elle ___ ressortie faire des courses.", answer: "être", translation: "to go out again", hint: "Movement verb → être" },
  { verb: "retomber", sentence: "Je ___ retombé(e) malade.", answer: "être", translation: "to fall again / relapse", hint: "State change verb → être" },
  { verb: "devenir", sentence: "Ils ___ devenus amis.", answer: "être", translation: "to become", hint: "State change verb → être" },
  { verb: "rester", sentence: "Tu ___ resté(e) calme.", answer: "être", translation: "to stay/remain", hint: "State verb → être" },

  { verb: "visiter", sentence: "Nous ___ visité le musée.", answer: "avoir", translation: "to visit (a place)", hint: "Regular verb → avoir" },
  { verb: "ranger", sentence: "J'___ rangé ma chambre.", answer: "avoir", translation: "to tidy up", hint: "Regular verb → avoir" },
  { verb: "jouer", sentence: "Ils ___ joué au foot.", answer: "avoir", translation: "to play", hint: "Regular verb → avoir" },
  { verb: "travailler", sentence: "Elle ___ travaillé toute la journée.", answer: "avoir", translation: "to work", hint: "Regular verb → avoir" },
  { verb: "cuisiner", sentence: "Tu ___ cuisiné un bon dîner.", answer: "avoir", translation: "to cook", hint: "Regular verb → avoir" },

  { verb: "marcher", sentence: "Nous ___ beaucoup marché.", answer: "avoir", translation: "to walk", hint: "Regular verb → avoir" },
  { verb: "chanter", sentence: "Elle ___ chanté une chanson.", answer: "avoir", translation: "to sing", hint: "Regular verb → avoir" },
  { verb: "danser", sentence: "Ils ___ dansé toute la nuit.", answer: "avoir", translation: "to dance", hint: "Regular verb → avoir" },
  { verb: "penser", sentence: "J'___ pensé à toi.", answer: "avoir", translation: "to think", hint: "Regular verb → avoir" },
  { verb: "espérer", sentence: "Tu ___ espéré une réponse.", answer: "avoir", translation: "to hope", hint: "Regular verb → avoir" },

  { verb: "demander", sentence: "Nous ___ demandé de l'aide.", answer: "avoir", translation: "to ask", hint: "Regular verb → avoir" },
  { verb: "expliquer", sentence: "Il ___ expliqué le problème.", answer: "avoir", translation: "to explain", hint: "Regular verb → avoir" },
  { verb: "montrer", sentence: "Elle ___ montré les photos.", answer: "avoir", translation: "to show", hint: "Regular verb → avoir" },
  { verb: "visiter", sentence: "Vous ___ visité plusieurs villes.", answer: "avoir", translation: "to visit", hint: "Regular verb → avoir" },
  { verb: "organiser", sentence: "Ils ___ organisé une fête.", answer: "avoir", translation: "to organize", hint: "Regular verb → avoir" },

  { verb: "chercher", sentence: "J'___ cherché mes lunettes.", answer: "avoir", translation: "to look for", hint: "Regular verb → avoir" },
  { verb: "trouver", sentence: "Elle ___ trouvé la solution.", answer: "avoir", translation: "to find", hint: "Regular verb → avoir" },
  { verb: "donner", sentence: "Ils ___ donné leur avis.", answer: "avoir", translation: "to give", hint: "Regular verb → avoir" },
  { verb: "aimer", sentence: "Nous ___ aimé ce film.", answer: "avoir", translation: "to like/love", hint: "Regular verb → avoir" },
  { verb: "regarder", sentence: "Tu ___ regardé la télé.", answer: "avoir", translation: "to watch", hint: "Regular verb → avoir" },

  { verb: "écouter", sentence: "J'___ écouté de la musique.", answer: "avoir", translation: "to listen", hint: "Regular verb → avoir" },
  { verb: "commencer", sentence: "Elle ___ commencé le projet.", answer: "avoir", translation: "to start", hint: "Regular verb → avoir" },
  { verb: "terminer", sentence: "Ils ___ terminé le travail.", answer: "avoir", translation: "to finish", hint: "Regular verb → avoir" },
  { verb: "continuer", sentence: "Nous ___ continué la discussion.", answer: "avoir", translation: "to continue", hint: "Regular verb → avoir" },
  { verb: "arrêter", sentence: "Tu ___ arrêté de fumer.", answer: "avoir", translation: "to stop", hint: "Regular verb → avoir" },

  { verb: "essayer", sentence: "J'___ essayé ce plat.", answer: "avoir", translation: "to try", hint: "Regular verb → avoir" },
  { verb: "utiliser", sentence: "Elle ___ utilisé son téléphone.", answer: "avoir", translation: "to use", hint: "Regular verb → avoir" },
  { verb: "acheter", sentence: "Ils ___ acheté une voiture.", answer: "avoir", translation: "to buy", hint: "Regular verb → avoir" },
  { verb: "vendre", sentence: "Nous ___ vendu notre maison.", answer: "avoir", translation: "to sell", hint: "Regular verb → avoir" },
  { verb: "payer", sentence: "Tu ___ payé la facture.", answer: "avoir", translation: "to pay", hint: "Regular verb → avoir" },
];
