let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scores = document.querySelectorAll(".score");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const resetb = document.querySelector("#reset");



resetb.addEventListener('click', () => {
    location.reload();
  });

const gencompchoice = () => {
    const options = ["rock", " paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawgame = () => {
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "black";
    return;     
}


const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "Green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "Red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = false;
        if(userchoice === "rock"){
            userwin = compchoice === "scissors"?true : false;
        }else if(userchoice === "paper"){
            userwin = compchoice === "rock"?true : false;
        }else{
            userwin = compchoice === "paper"?true : false;
        }
        showwinner(userwin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});