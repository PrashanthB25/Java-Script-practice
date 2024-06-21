let userScore =0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
let userText =document.getElementById("user-score")
let compText =document.getElementById("comp-score")
let message= document.getElementById("msg")

choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        playGame(userChoice)
    })
});

const generateComputerChoice =()=>{
    let options=["rock","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}

const playGame = (userChoice)=>{
 const compChoice= generateComputerChoice();
 console.log(userChoice);
 console.log(compChoice);
  if(userChoice===compChoice){
    drawGame()
  }else{
    let userWin =true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        userWin = compChoice==="scissor"? false:true;
    }else{
        userWin =compChoice==="rock"? false:true;
    }
    finalResult(userWin)
  }
};

const drawGame =()=>{
    message.innerText="MATCH DRAW";
    message.style.backgroundColor="#081b31"
}

const finalResult=(userWin)=>{
    if(userWin){
        userScore++;
        userText.innerText=userScore;
        message.innerText="YOU WON";
        message.style.backgroundColor="green"
      }else{
        compScore++;
        compText.innerText = compScore;
        message.innerText= "YOU LOSS"
        message.style.backgroundColor="red";
      }
}

