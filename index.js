let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }


});
function gameflash(btn){
    btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");

},250);
}

function userflash(btn){
    btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");

},250);
}
function levelUp(){
   userSeq=[];  
    level++;
    h2.innerText=`level ${level}`

    //random button
    let randIdx =Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let ranbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(ranbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameflash(ranbtn); 
     
}
function checkans(idx){
    // console.log("curr level",level);
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000)
       }
    }
    else{
        h2.innerHTML=`GAME OVER!! your score was <b>${level} <br> <br>Press any key to start!!`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){

document.querySelector('body').style.backgroundColor="white";
        },200)
        reset();
    }
}
function btnPress(){
   
    let btn1=this;
    userflash(btn1);

    let usercolor=btn1.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(i of allbtns ){
    i.addEventListener("click",btnPress);
}

function reset(){ 
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}