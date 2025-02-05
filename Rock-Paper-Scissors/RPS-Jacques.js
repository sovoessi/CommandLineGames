const choices = ["rock", "paper", "scissors"]

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function validInput(input){
    switch(input) {
        case "rock":
        case "paper":
        case "scissors":
            return true;
        default:
            return false;
    }
}

const args = process.argv.slice(2); 

// Error Handling

if (!validInput(args[0])) {
    console.log("Please provide a value between 'rock', 'paper' and 'scissors'");
    return;
}


// Get user input
const userInput = args[0].toLowerCase()

// Get computer choice
const computer = choices[getRandom(0, 3)]

// Compare choices and display result
switch (userInput) {
    case "rock":
        if(computer == "paper"){
            console.log(`You chose ${userInput}. Computer chose ${computer}.Oh no, You lose!`);

        }else if(computer == "scissors"){
            console.log(`You chose ${userInput}. Computer chose ${computer}. You win!`);
            
        }else{
            console.log(`You chose ${userInput}. Computer chose ${computer}. It' a tie!`);

        }
        break;
    case "paper":
        if(computer == "scissors"){
            console.log(`You chose ${userInput}. Computer chose ${computer}.Oh no, You lose!`);

        }else if(computer == "rock"){
            console.log(`You chose ${userInput}. Computer chose ${computer}. You win!`);

        } else {
            console.log(`You chose ${userInput}. Computer chose ${computer}. It' a tie!`);
        }
        break;
    case "scissors":
        if(computer == "rock"){
            console.log(`You chose ${userInput}. Computer chose ${computer}.Oh no, You lose!`);

        }else if(computer == "paper"){
            console.log(`You chose ${userInput}. Computer chose ${computer}. You win!`);

        } else {
            console.log(`You chose ${userInput}. Computer chose ${computer}. It' a tie!`);
        }
        break;
}


