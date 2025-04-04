// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const answer = prompt("Ti va di giocare?");
if (answer === "si" || answer === "Si") {
  const diceRollPlayer = Math.floor(Math.random() * 6) + 1;
  const diceRollComputer = Math.floor(Math.random() * 6) + 1;
  console.log(diceRollPlayer);
  alert(`Il tuo numero é ${diceRollPlayer}`);
  console.log(diceRollComputer);
  alert(`Il numero del computer é ${diceRollComputer}`);
  let outputText = "É un pareggio!";
  if (diceRollComputer < diceRollPlayer) {
    outputText = "Hai vinto! :)";
  } else if (diceRollComputer > diceRollPlayer) {
    outputText = "Hai perso! :(";
  }
  alert(outputText);
} else {
  alert("Alla Prossima allora!");
}
