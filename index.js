/// DOM Elements
const startButton = document.getElementById("startGameBtn");
const word  = getRandomWord();
//const wordLength = word.split("").length;
const wordString = [];

/// Updating Elements 
for(let i = 0; i < wordLength; i++){ wordString.push("_") }
document.getElementById("lettersDisplay").innerText = wordString.join(" ");

/// DOM Elements

const guessForm = document.getElementById("guess_form");
const guessSection = document.querySelectorAll(".guess_letters")


const wordArray = word.split("");
const wordLength = wordArray.length;
//const wordString = [];

/// Updating Elements 
for(let i = 0; i < wordLength; i++){ wordString.push("_") }
document.getElementById("lettersDisplay").innerText = wordString.join(" ");

guessForm.hidden = true

/// Functions 
const checkRSTLNE = () => {
    const regex = /[rstlne]/g;
    const rstlneLetters = word.match(regex);

    for(let i = 0; i < rstlneLetters.length; i++){
       let letter = rstlneLetters[i];
        for(let i = 0; i < wordArray.length; i++){
            if(wordArray[i] === letter){wordString[i] = letter}
        } 
    }
    document.getElementById("lettersDisplay").innerText = wordString.join(" ")
}

const startGame = () => {
    startButton.hidden = true;
    guessForm.hidden = false;
    checkRSTLNE()
}

/// Listeners 
startButton.addEventListener('click',startGame);

/// DOM Elements
const startButton = document.getElementById("startGameBtn");
const guessForm = document.getElementById("guess_form");
const submitButton = document.getElementById("submitBtn");

/// JS Variables 
const word  = getRandomWord();
const wordArray = word.split("");
const wordLength = wordArray.length;
const wordString = [];

/// Updating Elements 
for(let i = 0; i < wordLength; i++){ wordString.push("_") }
document.getElementById("lettersDisplay").innerText = wordString.join(" ");

guessForm.hidden = true

/// Functions 

const checkConAndVows = (event) => {
    event.preventDefault();
    const guessLettersLength = document.querySelectorAll("input").length;
    const lettersAdded = [];
    for(let i = 0; i < guessLettersLength; i++){
        lettersAdded.push(document.querySelectorAll("input")[i].value);
    }
    for(let i = 0; i < lettersAdded.length; i++){
        let letter = lettersAdded[i];
         for(let i = 0; i < wordArray.length; i++){
             if(wordArray[i] === letter){wordString[i] = letter}
         } 
     
     document.getElementById("lettersDisplay").innerText = wordString.join(" ")
 }

}

const checkRSTLNE = () => {
    const regex = /[rstlne]/g;
    const rstlneLetters = word.match(regex);
    let visited = {};

    for(let i = 0; i < rstlneLetters.length; i++){
       let letter = rstlneLetters[i];
        for(let i = 0; i < wordArray.length; i++){
            if(wordArray[i] === letter){wordString[i] = letter}
        } 
    }
    document.getElementById("lettersDisplay").innerText = wordString.join(" ")
}

const startGame = () => {
    startButton.hidden = true;
    guessForm.hidden = false;
    checkRSTLNE()
}

/// Listeners 
startButton.addEventListener('click',startGame);
submitButton.addEventListener('click',checkConAndVows);

const wonGame = () => {
    if(wordString.join("") === word){
        /// Won Game Function 
        console.log("You Won");
    }
}
