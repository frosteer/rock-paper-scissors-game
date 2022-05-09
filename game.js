let playerSelection = "";
let roundArray = [];
let computerSelection = "";
let i = 1;
var newLine = "\r\n"
 
function startGame() {
    let start = prompt("Choose rock, paper, or scissor");
    if (start.toLowerCase() == "rock" || start.toLowerCase() == "paper" || start.toLowerCase() == "scissor") {
        playerSelection = start.toLowerCase();
    } else {
        startGame();
    }
}



let computerPlay = () => {
    let options = ["rock", "paper", "scissor"];
    computerSelection = options[(Math.floor(Math.random()*options.length))];
    alert("Computer chose " + computerSelection + "!")
}



let playRound = () => {
    if (playerSelection == "rock") {
        if (computerSelection == "rock"){ alert("Round " + i  + newLine + "Draw!"); roundArray.push("Draw!"); i++;};
        if (computerSelection == "paper") {alert("Round " + i +  newLine + "Computer Wins! Paper Beats Rock"); roundArray.push("Computer Wins!"); i++;};
        if (computerSelection == "scissor") {alert("Round " + i + newLine + "You Win! Rock Beats Scissor"); roundArray.push("You Win!"); i++;};
        
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {alert("Round " + i  + newLine + "You Win! Paper Beats Rock"); roundArray.push("You Win!")};
        if (computerSelection == "paper") { alert("Round " + i  + newLine + "Draw!"); roundArray.push("Draw!")};
        if (computerSelection == "scissor") {alert("Round " + i  + newLine + "Computer Wins! Scissor Beats Paper"); roundArray.push("Computer Wins!")};
        i++;
    }

    if (playerSelection == "scissor") {
        if (computerSelection == "rock") {alert("Round " + i  + newLine + "Computer Wins! Rock Beats Scissor"); roundArray.push("Computer Wins!")};
        if (computerSelection == "paper") {alert("Round " + i  + newLine + "You Win! Scissor Beats Paper"); roundArray.push("You Win!")};
        if (computerSelection == "scissor") { alert("Round " + i  + newLine + "Draw!"); roundArray.push("Draw!")};
        i++;
    }
}




let gameWinner = () => {
    while (roundArray.length < 5) {
        startGame();
        computerPlay();
        playRound();
    }
    let playerWinCount = roundArray.filter(x => x == "You Win!").length;
    let computerWinCount = roundArray.filter(x => x == "Computer Wins!").length;

    
    if (playerWinCount > computerWinCount) {
        alert("Congratulations! You Are The Ultimate Winner!" + newLine + roundArray + newLine + newLine +"Reload to play again");
    } else if (playerWinCount < computerWinCount) {
        alert("Computer Wins This Time. Let's Try Again!" + newLine + roundArray + newLine + newLine +"Reload to play again");
    } else {
        alert("Wow, It's A Draw. Let's Try Again!" + newLine  + roundArray + newLine + newLine +"Reload to play again");
    }
}

gameWinner();


/*
PROGRAM startGame
    prompt window
    let player input rock, paper, or scissors // case insensitive
        if true, then define playerSelection
        if false, then prompt window again.
END PROGRRAM // done

PROGRAM computerPlay
    randomly return either rock, paper, or scissors (rps)
    define array options = [rps]
    define computerSelection = choice[Math.Floor(Math.random() * choices.length)];
    return computerSelection 
END PROGRAM // done

PROGRAM playRound
    compare playerSelection vs. computerSelection
        use switch
            case r
                if computer choose rock; status = draw,
                if computer choose paper; status  = lose,
                if computer choose scissors; status =  win,
            
        push status array
    return winner "You Lose! Paper Beats Rock"
END PROGRAM // done

PROGRAM gameWinner
    playRound loop 5 times
    each round display: round number and round result
    check status array, if win>lose = ultimate winner, or draw
    end of 5 rounds display: round number, round result, and ultimate winner
END PROGRAM
*/