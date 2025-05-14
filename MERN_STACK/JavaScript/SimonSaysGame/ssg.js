let gameseq=[];
let userseq=[];
let highScr = [];

let btns= ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("game started")
        started = true;
    
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameFlash(randomBtn);
    gameseq.push(randomColor);
    console.log(gameseq);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
}

function checkAns(idx){

    if ( userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelUp,1000);   
        }

    } else {
        h3.innerHTML = `game over!! your score was <b>${level}<b>. <br>Enter any key to restart`;

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },100);

        highest();

        reset();
    }

}


function btnPress() {
    let selectedBtn = this;
    userFlash(selectedBtn);
    let userColor = selectedBtn.getAttribute("id");
    userseq.push(userColor);
    
    console.log(this)
    checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for( btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function highest() {
    let highlevel = level;
    highScr.push(highlevel);
}


