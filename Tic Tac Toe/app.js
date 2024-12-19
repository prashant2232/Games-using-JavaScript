let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#win");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if(turnO){
        box.innerText="O";
        turnO = false;
      }else{
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      checkwinner();
    });
  });


  const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }


  const disableBoxes = () => {
    for(box of boxes){
      box.disabled = true;
    }
  }


  const enableBoxes = () => {
    for(box of boxes){
      box.disabled = false;
      box.innerText="";
    }
  }


  const showWinner = (winner) => {
    msg.innerText = `${winner} won the game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }


const checkDraw = () => {
  let allfilled = true;
  boxes.forEach((box) => {
    if(box.innerText === ""){
      allfilled = false;
    }
  });
  if(allfilled){
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
}


  const checkwinner = () => {
    for(let pattern of winPatterns){
      console.log(pattern[0],pattern[1],pattern[2]);
      let pos1Val = boxes[pattern[0]].innerText; 
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if(pos1Val!= "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val=== pos3Val){
          showWinner(pos1Val);
        }
      }
    }
    checkDraw();
  };

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

