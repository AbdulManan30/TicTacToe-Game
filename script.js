let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let celebration = document.querySelector('.confetti');
let winnerAni = document.querySelector('.waviy');
let turnO = true;

let WinPattrens = [
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
        if (!box.innerText) {
            if (turnO === true) {
                box.innerText = "O";
                box.style.color = 'black';
                box.style.textShadow = '1px 1px 15px gray';
                turnO = false;
            } else {
                turnO = true;
                box.innerText = "X";
                box.style.color = 'purple';
                box.style.textShadow = '1px 1px 15px rgb(81, 2, 81)';
            }
            box.setAttribute("disabled", "true");
            checkWinner();
        }
    });
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

const checkWinner = () => {
    for (const pattrens of WinPattrens) {
        let pos1 = boxes[pattrens[0]].innerText;
        let pos2 = boxes[pattrens[1]].innerText;
        let pos3 = boxes[pattrens[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                celebration.style.display = 'flex';
                let aniSpan = document.createElement('span');
                aniSpan.setAttribute('style', '--i:12');
                aniSpan.style.fontSize = '70px';
                aniSpan.innerText = pos1;
                aniSpan.style.color = '#00afb9';
                aniSpan.style.textShadow = '1px 1px 15px rgb(0, 204, 255)';
                winnerAni.append(aniSpan);
                disableBtn();
                return;
            }
        }
    }
    // Check for draw
    if (isDraw()) {
        let message =  document.getElementById("message")
        message.textContent = "Match is Draw Please Click Reset Button to Start a New Game:";
    }
};


const isDraw = () => {
    let draw = true;
    for (const box of boxes) {
        if (!box.innerText) {
            draw = false;
            break;
        }
    }
    return draw;
};

function disableBtn() {
    let arr = Array.from(boxes);
    arr.map((item) => {
        item.setAttribute('disabled', 'true');
    });
}
