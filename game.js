// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["r", "p", "s"];
let wins = 0;
let ties = 0;
let losses = 0;
let lossDisplay = document.getElementById("num-losses");
let winDisplay = document.getElementById("num-wins");
let tieDisplay = document.getElementById("num-ties");
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  let userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess != 's' && userGuess != 'r' && userGuess != 'p'){
      alert("Not a valid choice. Try again with s, r, or p.");
  }
  else {
      let userGuessDisplay = document.getElementById("user-guess");
      let computerGuessDisplay = document.getElementById("computer-guess");
      let whoWon = document.getElementById("who-won");

      userGuessDisplay.textContent = "User guess: " + userGuess + '\n';
      computerGuessDisplay.textContent = "Computer guess: " + computerGuess + '\n'

     if ((userGuess == 's' && computerGuess == 's') || (userGuess == 'p' && computerGuess == 'p') || (userGuess == 'r' && computerGuess == 'r')){
         whoWon.textContent = "Tie! \n";
         ties += 1;
         tieDisplay.textContent = ties;
     }
     else if ((userGuess == 's' && computerGuess == 'r') || (userGuess == 'r' && computerGuess == 'p') || (userGuess == 'p' && computerGuess == 's')){
         whoWon.textContent = "The computer wins! \n";
         losses += 1;
         lossDisplay.textContent = losses;
     }
     else {
         whoWon.textContent = "The player wins! \n";
         wins += 1;
         winDisplay.textContent = wins;
     }
  }
  

};