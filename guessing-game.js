const displayHelp = function (input) {
    if (input === "0") {
        alert("Enter a guess between 1 and 10. \n-1 to exit.")
        return prompt("Give me your best guess!")
    }
}

const askUserForInput = () => {
    return prompt("Give me your best guess!")
}

//Starting the game
alert("Welcome to the Guessing Game!")

//Initial Guess
let userGuess
//evauating guesses
let userGuessCount = 1;
while (userGuess !== "-1" && userGuessCount <= 2) {
    userGuess = askUserForInput()

    userGuess = displayHelp(userGuess)

    if (userGuess === "7") {
        alert("You WON!!  Such a winner you are!!!");
        break;
    } else {
        evaluateWrongAnswer(userGuess);
        alert("You lose.");
        userGuessCount++;
    }
}