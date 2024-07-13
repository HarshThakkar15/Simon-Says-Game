let gameSeq=[];
let userSeq=[];

let btns=["yellow","green","purple","red"];

let started = false;
let level = 0;
let highscore = 1;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started== false){
        started=true;     
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    if(level >= highscore){
        highscore = level;
    }
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}

function checkans(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`;
        h3.innerHTML =`Highest Score =  ${highscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        reset();
    }
}

function btnPress(){ 
    let btn =this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false; 
    gameSeq = [];
    userSeq = [];
    level = 0;
}
