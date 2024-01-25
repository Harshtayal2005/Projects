let userScore = 0;
let compScore = 0;
let result = document.querySelector("#results");

const choices = document.querySelectorAll(".hand_image_container");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let ranNum = Math.floor(Math.random() * 3);
    return options[ranNum];
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(compChoice === userChoice){
        result.innerText = "It's a Draw. Play Again!";
        result.style.backgroundColor = "rgb(33, 31, 31)";
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            //compchoice -> paper, scissor
            userWin = compChoice === "scissor"? true : false;
        }
        else if(userChoice === "paper"){
            //compchoice -> rock, scissor
            userWin = compChoice === "rock"? true : false;
        }
        else{
            //compchoice -> rock, paper
            userWin = compChoice === "paper"? true : false;
        }

        if(userWin){
            result.innerText = `You won. Your ${userChoice} beats ${compChoice}`;
            result.style.backgroundColor = "green";
            document.querySelector(".player_score_number").innerText++;
        }
        else{
            result.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
            result.style.backgroundColor = "red";
            document.querySelector(".comp_score_number").innerText++;
        }
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});