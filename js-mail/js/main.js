// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

const invitedList = [
  "user@gmail.com",
  "vincenzo@gmail.com",
  "davide@yahoo.it",
  "bruno@hotmail.com",
  "assunta@gmail.com",
  "livia@libero.it",
  "roberto@gmail.com",
  "gabriele@gmail.com",
  "angelo@yahoo.it",
];

let isUserInvited = false;
let outputText =
  "Mi dispiace, non sei nella lista degli invitati, sará per la prossima!";

const currentUser = prompt("Inserisci la tua mail per accedere alla festa");

for (let i = 0; i < invitedList.length && isUserInvited === false; i++) {
  if (currentUser === invitedList[i]) {
    isUserInvited = true;
    outputText = "Benvenuto alla festa!";
  }
  console.log(outputText);
}
alert(outputText);
