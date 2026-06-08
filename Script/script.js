let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const popUpMessage = document.querySelector("#msg");

const userScoreJS = document.querySelector("#userScore");
const computerScoreJS = document.querySelector("#computerScore");

const generateComputerChoice = () => {
    let choiceArr = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choiceArr[randomIndex];
}

const drawGame = () => {
    popUpMessage.innerText = "Game Was Draw!! Play Again";
    popUpMessage.style.background = "#000000";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScoreJS.innerText = userScore;
        popUpMessage.innerText = `You Win!! Your ${userChoice} beats ${computerChoice}`;
        popUpMessage.style.background = "green";
    }
    else{
        computerScore++;
        computerScoreJS.innerText = computerScore;
        popUpMessage.innerText = `You Lose!! ${computerChoice} beats Your ${userChoice}`;
        popUpMessage.style.background = "red";
    }
}

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    if(userChoice===computerChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }

        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});