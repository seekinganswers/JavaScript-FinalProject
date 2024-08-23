"use strict";

/*    Final Project

Author: Dorothy Hill, July 10, 2024, IST239-W01, Final Project

In the final project I will showcase my skills based on what
I have learned during the semester. This part of the project
shows the interactive skills by incorporating a game into the
code. The js file shows how the code is used in tandem with the
html code to create an interactive experience.

    Filename:       index3.css
*/

// variable holding words for the game
let gameWords = [ "and" ,  "fix" ,  "own" ,  "are" ,  "fly" ,  "odd" ,  "ape" ,  "fry" ,  "our" ,  "ace" ,  "for" ,
"pet" ,  "act" ,  "got" ,  "pat" , "ask", "get", "peg", "arm", "god", "paw", "age", "gel", "pup", "ago", "gas", "pit", "air", "hat", "put",
    "ate", "hit", "pot", "all", "has", "pop", "but", "had", "pin", "bye", "how", "rat", "bad", "her", "rag" ,"big", "his", "rub", "bed", "hen",
    "row", "bat", "ink", "rug", "boy", "ice", "run", "bus", "ill", "rap", "bag", "jab", "ram", "box", "jug", "sow", "bit", "jet", "see", "bee",
    "jam", "saw", "buy", "jar", "set", "bun", "job", "sit", "cub", "jog", "sir", "cat", "kit", "sat", "car", "key", "sob", "cut", "lot", "tap",
    "cow", "lit", "tip", "cry", "let", "top", "cab", "lay", "tug", "can", "mat", "tow", "dad", "man", "toe", "dab", "mad", "tan", "dam", "mug",
    "ten", "did", "mix", "two", "dug", "map", "use", "den", "mum", "van", "dot", "mud", "vet", "dip", "mom", "was", "day", "may", "wet", "ear",
"met", "win", "eye", "net", "won", "eat", "new", "wig", "end", "nap", "war", "elf", "now", "why", "egg", "nod", "who", "far", "net", "way", "fat",
"not", "wow", "few", "nut", "you", "fan", "oar", "yes", "fun", "one", "yak", "fit", "out", "yet", "fin", "owl", "zip", "fox", "old", "zap"];

// declare variables for current word, timer, and time left
let currentWord;
let timer;
let timeLeft =30;

// set an event listener for the document to load
document.addEventListener('DOMContentLoaded', () => {

    //variables referencing the associated HTML elements
    let wordElement = document.getElementById("word");
    let inputElement = document.getElementById("input");
    let messageElement = document.getElementById("message");
    let timerElement = document.getElementById("timer");
    let submitBtn = document.getElementById("submitBtn");
    let restartBtn = document.getElementById("restartBtn");

    //function to start a new game
    function startGame() {
        timeLeft = 10; //time is set at 10 seconds
        messageElement.textContent = ""; //clears the message
        inputElement.value = ""; //clears the input field
        startTimer(); //start timer
        setNewWord(); //get a new word
    }

    // function that gets  a random word from a list
    function setNewWord() {
        // get a random word from the list
        currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
        wordElement.textContent = currentWord; //display the current word
    }

    // create a start timer for function to countdown time
    function startTimer() {
        timer = setInterval(() => {
            timeLeft--; // decrease time by 1 second
            timerElement.textContent = timeLeft; //update the time
            if (timeLeft <= 0) { //if statement for time up
                clearInterval(timer); //clear timer
                //display a message when time is up
                messageElement.textContent = "Time’s up! The word was:" + currentWord;
                submitBtn.disabled = true; //disable the submit button
            }
        }, 1000); // 1 second interval
    }

    //create a submit button
    submitBtn.addEventListener("click", () => {
        if (inputElement.value === currentWord) {
            //message for correct answer
            messageElement.textContent = "You got the word correct!";
            clearInterval(timer);
            //restart game
            setTimeout(startGame, 1000);
        } else {
            //message when word is misspelled
            messageElement.textContent = "Try again!";
        }

    });

    // restart the game using event listener
    restartBtn.addEventListener("click", () =>{
        clearInterval(timer); // clears timer
        startGame(); //restart game
    });

    //start the game when the page loads
    startGame();
});



