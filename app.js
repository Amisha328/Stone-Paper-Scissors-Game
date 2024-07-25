let userScore = 0;
let machineScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const machineScorePara = document.querySelector("#machine-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    // Math.random always generate value between 0-1, to get the values between 0-2, we have to multiply it by 3
    // we are taking the floor of it to get the whole number only
    let computerChoice = Math.floor(Math.random() * 3);
    return options[computerChoice];
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win!! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        machineScore++;
        machineScorePara.innerText = machineScore;
        message.innerText = `You lost!! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // console.log("User choice is: ", userChoice);

    // Generate computer choice
    const computerChoice = generateComputerChoice();
    // console.log("Computer choice is: ", computerChoice);

    if(userChoice === computerChoice){
        message.innerText = "Game is draw, play again!!"
        message.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
             userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})