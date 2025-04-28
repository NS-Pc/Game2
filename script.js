//loading screen
let loading=document.getElementById("loading");
setTimeout(()=>{
    loading.style.display="none";
},3000)
//All variable
let Human=document.getElementById("human");
let Ai=document.getElementById("Ai");
let show=document.getElementById("show");
let R=document.getElementById("R");
let P=document.getElementById("P");
let S=document.getElementById("S");
let Replay=document.getElementById("Replay");

//All setting
let a=0;
let h=0;
R.addEventListener("click",()=>{
    show.style.display="block";
    let ai=Math.floor(Math.random()*3+1);
    if(ai==1){
        show.innerHTML="draw or a tie! 😱";
    }else if(ai==2){
        show.innerText="You are lose! 😥";
        a=a+1;
        Ai.innerText=a;
    }else if(ai==3){
        show.innerText="You are win! 🤩";
        h=h+1;
        Human.innerText=h;
    }
})
P.addEventListener("click",()=>{
    show.style.display="block";
    let ai=Math.floor(Math.random()*3+1);
    if(ai==1){
        show.innerText="You are win! 🤩";
        h=h+1;
        Human.innerText=h;
    }else if(ai==2){
        
        show.innerHTML="draw or a tie! 😱";
    }else if(ai==3){
        
        show.innerText="You are lose! 😥";
        a=a+1;
        Ai.innerText=a;
    }
})
S.addEventListener("click",()=>{
    show.style.display="block";
    let ai=Math.floor(Math.random()*3+1);
    if(ai==1){
        show.innerText="You are lose! 😥";
        a=a+1;
        Ai.innerText=a;
    }else if(ai==2){
        show.innerText="You are win! 🤩";
        h=h+1;
        Human.innerText=h;
    }else if(ai==3){
        show.innerHTML="draw or a tie! 😱";
    }
})
Replay.addEventListener("click",()=>{
    Human.innerText=0;
    Ai.innerText=0;
    show.style.display="none";
})