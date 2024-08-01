let gameseq = [];
let userseq = [];
let gamestarted = false;
let level =0 ;
let btns = ["red","green","yellow","blue"]

document.addEventListener("keypress",function(){
    if (gamestarted==false) {
        console.log("Game Started");
        gamestarted=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(() => {
        btn.classList.remove("user-flash");
    }, 250);
}

let h2= document.querySelector("h2");

function levelUp() {
    userseq = [];
    level++;
    h2.innerText=  `Level ${level}`;
    
    let randIdx= Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    /* console.log(randIdx);
    console.log(randcolor);
    console.log(randBtn); */
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    //let idx = level - 1;
    if (gameseq[idx]===userseq[idx]) {
        if (userseq.length==gameseq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again`;
        reset();
    }
}

function btnPress() {
    //console.log("Button Pressed");
    //console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    gamestarted = false;
    userseq = gameseq = [];
    level =0 ;

}