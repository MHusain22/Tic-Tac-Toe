let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let turn0 = true;

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

const disabledBoxes= () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes= () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        msgContainer.classList.add("hide");
    }
}
const resetGame = () => {
    turn0 = true;
    enableBoxes();
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("CILCKED");
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "blue";
      turn0 = true;
    }
    box.disabled = true; //after every click the box get disabled
    checkWinner(); //on each wee will check winner
  });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(
    //   boxes[pattern[0]].innerHTML, //postion 1
    //   boxes[pattern[1]].innerHTML, //position 2
    //   boxes[pattern[2]].innerHTML //position 3
    // );

    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if(pos1!="" && pos2!="" && pos3!="") {
        if (pos1==pos2 && pos2==pos3) {
            console.log("WINNER",pos1);

            showWinner(pos1);
        }
    }
  }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);