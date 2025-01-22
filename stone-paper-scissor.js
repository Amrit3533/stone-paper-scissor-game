let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let CurrUserScore=document.querySelector("#user-score");
let CurrCompScore=document.querySelector("#comp-score");
console.log(choices);
// let msg=document.querySelector("#msg");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("box clicked",userChoice);
        playGame(userChoice);
    });
});
const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice=generateCompChoice();
    console.log("comp choice= ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
            if(userChoice==="stone"){
                //if comp generate stone then it'll fall in draw match condition
                //comp may generate paper or scissor
                userWin=compChoice==="paper"?false:true;
                //agr comp paper chooose lrega to userWin false hoga nhi to true hoga
            }
            else if(userChoice==="paper"){
                //comp may generate stone,scissor
                userWin=compChoice==="scissor"?false:true;
            }
            else{
                //comp may generate stone,paper
                //agr comp ka choice stone hai to userwin false nhi to ture
                userWin=compChoice==="stone"?false:true;
            }
        showWinner(userWin,userChoice,compChoice);
    }
    
};
const generateCompChoice=()=>{
    const options=["stone","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];//returns random index from options named array
};

const drawGame=()=>{
    console.log("dwraw");
    msg.innerText="Match Draw!Play Again!";
    msg.style.background="Blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        CurrUserScore.innerText=userScore;
        msg.innerText=`You Won!,Your ${userChoice} BEAT ${compChoice}`;
        msg.style.background="green";
    }
    else{
        compScore++;
        CurrCompScore.innerText=compScore;
        msg.innerText=`You lose, ${compChoice} BEAT ${userChoice}`;
        msg.style.background="red";
    }
    
}