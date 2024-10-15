let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

// Change the event listener to detect clicks anywhere on the document
document.addEventListener("click", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Random button
    let randIdx = Math.floor(Math.random() * 4); // Fix here to use 4 instead of 3 for all buttons
    let randColor = btns[randIdx];
    let ranbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameflash(ranbtn);
}

function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER!! Your score was <b>${level}</b> <br><br>Press anywhere to start again!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn1 = this;
    userflash(btn1);

    let usercolor = btn1.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let i of allbtns) {
    i.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
