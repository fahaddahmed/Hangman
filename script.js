const wordArray = [
  "javascript",
  "usmanflop",
  "wanda",
  "hunty",
  "flop",
  "flops",
  "hugs",
  "yao",
  "ninety",
  "hangman",
  "superwoman",
  "usman",
  "fahad",
  "mama",
  "java",
  "hunting",
  "function",
  "lore",
  "skyrim",
  "farcry",
  "outlast",
]

var Wordchosen = Math.floor(Math.random()*20); 
var finWord = wordArray[Wordchosen]

var guesses = 6;
var rightGuesses = 0;

for (var i = 0; i< finWord.length; i++) {
  var underscore = document.createElement('p');
  underscore.className = finWord.charAt(i);
  underscore.id = "para";
  underscore.innerHTML = "_";
  var tempDiv = document.getElementById("blanks-div");
  tempDiv.appendChild(underscore);
}

function myFunction(event){
  var userGuess = event.value; 
  var matchedLetters = document.getElementsByClassName(userGuess);
  if (matchedLetters != null && matchedLetters.length > 0) {
    for (letter of matchedLetters) {
      letter.innerHTML = userGuess;
      rightGuesses++;
      if(rightGuesses === finWord.length){
        document.getElementById("blanks-div").innerHTML = "You won!  The word was " + finWord + "!";
        document.getElementById("Guessesleft").innerHTML = "You won with " + guesses + " guesses left!";
      }
  } } else {
    guesses--;
    var guessedLetter = document.createElement('p');
    guessedLetter.id = "Letters";
    guessedLetter.innerHTML = userGuess;
    var ltrDiv = document.getElementById("letters");
    ltrDiv.appendChild(guessedLetter);
    document.getElementById("Guessesleft").innerHTML = "You have " + guesses + " guesses left"
    if (guesses === 5){
      document.getElementById("image").src = "hangmanImages/1.jpeg"
    }
    if (guesses === 4){
      document.getElementById("image").src = "hangmanImages/2.jpeg"
    }
    if (guesses === 3){
      document.getElementById("image").src = "hangmanImages/3.jpeg"
    }
    if (guesses === 2){
      document.getElementById("image").src = "hangmanImages/4.jpeg"
    }
    if (guesses === 1){
      document.getElementById("image").src = "hangmanImages/5.jpeg"
    }
    if (guesses === (0)){
      document.getElementById("image").src = "hangmanImages/6.jpeg"
      document.getElementById("blanks-div").innerHTML = "You have lost, the word was " + (finWord) + "!";
    }
  }
}