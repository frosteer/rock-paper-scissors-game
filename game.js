let playerSelection = "";
let roundArray = [];
let computerSelection = "";
let i = 1;
var newLine = "\r\n"

// game start
const rock = document.querySelector(".rock p");
rock.addEventListener("click", rocky);

function rocky() {
  playerSelection = "rock";
  computerPlay();
  playRound();
  document.querySelector("audio").play();
  console.log("rock")
};

const paper = document.querySelector(".paper p");
paper.addEventListener("click", papery);

function papery() {
  playerSelection = "paper";
  computerPlay();
  playRound()
  document.querySelector("audio").play();
  console.log("paper");
};

const scissor = document.querySelector(".scissor p");
scissor.addEventListener("click", scissory);

function scissory() {
  console.log("scissor")
  playerSelection = "scissor";
  computerPlay();
  playRound();
  document.querySelector("audio").play();
};

//audio
document.querySelector("audio").play();

// computer pick randomly
let computerPlay = () => {
    let options = ["rock", "paper", "scissor"];
    computerSelection = options[(Math.floor(Math.random()*options.length))];
    
  ;
}
let sentence = document.querySelector(".announcement .winner");
let mainSentence = document.querySelector(".announcement .round");

//my life condition

let myHPLeft = 50
let myLife = myHPLeft + "/50"
let myLifeAmount = document.querySelector(".player1 .hp")

function resetMyLife(){
  myHPLeft -= 10
  myLife = myHPLeft + "/50"
  myLifeAmount.innerText = myLife;
}

let mytotalHP = document.querySelector(".mylife");
let myStyle = mytotalHP.setAttribute('style', 'width: 250px;');

// enemy life condition
let enemyHPLeft = 50
let enemyLife = enemyHPLeft + "/50"
let enemyLifeAmount = document.querySelector(".player2 .hp")

function resetEnemyLife(){
  enemyHPLeft -= 10
  enemyLife = enemyHPLeft + "/50"
  enemyLifeAmount.innerText = enemyLife;
}

let enemytotalHP = document.querySelector(".enemylife");
let enemyStyle = enemytotalHP.setAttribute('style', 'width: 250px;');

// pikachu attack animation
let pikachu = document.querySelector('.myImg')

function pikachuGo() {
  pikachu.classList.add('pikachuGo');
  setTimeout(pikachuBack, 200);
  setTimeout(resetPikachu, 100);
}

function pikachuBack() {
  pikachu.classList.add('pikachuBack');
}

function resetPikachu() {
  pikachu.classList.remove('pikachuBack');
}

// cubone attack animation
let cubone = document.querySelector('.enemyImg')

function cuboneGo() {
  cubone.classList.add('cuboneGo');
  setTimeout(cuboneBack, 200);
  setTimeout(resetCubone, 100);
}

function cuboneBack() {
  cubone.classList.add('cuboneBack');
}

function resetCubone() {
  cubone.classList.remove('cuboneBack');
}






// enemy attack function
let enemyAttack = () => {
  resetMyLife();
  cuboneGo();
  if (myHPLeft == 40) {myStyle = mytotalHP.setAttribute('style', 'width: 200px;')};
  if (myHPLeft == 30) {myStyle = mytotalHP.setAttribute('style', 'width: 150px;')};
  if (myHPLeft == 20) {myStyle = mytotalHP.setAttribute('style', 'width: 100px;')};
  if (myHPLeft == 10) {myStyle = mytotalHP.setAttribute('style', 'width: 50px;')};
  if (myHPLeft == 0) {
    myStyle = mytotalHP.setAttribute('style', 'width: 0px;');
    sentence.innerText = "Cubone Wins! Better Luck Next Time! "
    
    rock.removeEventListener("click", rocky);
    paper.removeEventListener("click", papery);
    scissor.removeEventListener("click", scissory);
    }
};

// my attack function
let myAttack = () => {
  resetEnemyLife();
  pikachuGo();
  
  
  if (enemyHPLeft == 40) {enemyStyle = enemytotalHP.setAttribute('style', 'width: 200px;')};
  if (enemyHPLeft == 30) {enemyStyle = enemytotalHP.setAttribute('style', 'width: 150px;')};
  if (enemyHPLeft == 20) {enemyStyle = enemytotalHP.setAttribute('style', 'width: 100px;')};
  if (enemyHPLeft == 10) {enemyStyle = enemytotalHP.setAttribute('style', 'width: 50px;')};
  if (enemyHPLeft == 0) {
    enemyStyle = enemytotalHP.setAttribute('style', 'width: 0px;');
    sentence.innerText = "Pikachu Wins! Bravo! "
     
    rock.removeEventListener("click", rocky);
    paper.removeEventListener("click", papery);
    scissor.removeEventListener("click", scissory);
    }
  
};

//win Condition
let draw = () => {
  sentence.innerText = "Cubone use " + computerSelection + ". But, nothing happened.";
          i++;
        
          const myloseTimeOut = setTimeout(myloseSentence, 2000);

          function myloseSentence() {
          sentence.innerText = "Pikachu use " + playerSelection +". Nothing happened."
           mainSentence.innerText = "Round" + " " + i; 
          }
          
  
};

let computerWin = () => {
  sentence.innerText = "Cubone use " + computerSelection + ". It's super effective!";
          i++;
          
          const myloseTimeOut = setTimeout(myloseSentence, 2000);

          function myloseSentence() {
          sentence.innerText = "Pikachu use " + playerSelection +". Nothing happened."
            
            enemyAttack();
            mainSentence.innerText = "Round" + " " + i; 
          };
          
          
};

let playerWin = () => {
  sentence.innerText = "Cubone use " + computerSelection + ". Nothing happened";
          i++;
          const myloseTimeOut = setTimeout(myloseSentence, 2000);
          
          function myloseSentence() {
          sentence.innerText = "Pikachu use " + playerSelection +". It's super effective."
            
            myAttack();
            mainSentence.innerText = "Round" + " " + i; 
          };
};




// play the game
let playRound = () => {
    if (playerSelection == "rock") {
        if (computerSelection == "rock"){ 
          draw()
        }
    }
    if (playerSelection == "rock") {
         if (computerSelection == "paper"){ 
           computerWin()
         }
    }
    if (playerSelection == "rock") {
         if (computerSelection == "scissor"){ 
           playerWin()
         }
    }
  
  if (playerSelection == "paper") {
        if (computerSelection == "rock"){ 
          playerWin()
        }
    }
    if (playerSelection == "paper") {
         if (computerSelection == "paper"){ 
           draw()
         }
    }
    if (playerSelection == "paper") {
         if (computerSelection == "scissor"){ 
           computerWin()
         }
    }
  
  if (playerSelection == "scissor") {
        if (computerSelection == "rock"){ 
          computerWin()
        }
    }
    if (playerSelection == "scissor") {
         if (computerSelection == "paper"){ 
           playerWin()
         }
    }
    if (playerSelection == "scissor") {
         if (computerSelection == "scissor"){ 
           draw()
         }
    }
};
