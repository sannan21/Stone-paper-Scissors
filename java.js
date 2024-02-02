let userscore=0;
let comptscore=0;

let winner=(userwin,userchoice,compselected)=>{
if(userwin==true){
    document.querySelector("#msg").innerHTML=`you won, Your ${userchoice} beats Computers ${compselected}`;
    userscore++;
    document.querySelector("#user_score").innerHTML=`${userscore}`;
}
else{
    document.querySelector("#msg").innerHTML=`you lost,Computers ${compselected} beats Your ${userchoice} `;
    comptscore++;
    document.querySelector("#comp_score").innerHTML=`${comptscore}`
}
};

let choices=document.querySelectorAll(".game");
const draw=(userchoice)=>{
    document.querySelector("#msg").innerHTML=`Game was draw, both selected ${userchoice}`;
};

const gencompchoice=()=>{
const options=["rock","paper","scissors"];
let selected =Math.floor(Math.random()*3);
return options[selected];
};


const playgame =(userchoice)=>{
    let compselected=gencompchoice();
    if(userchoice===compselected){
        draw(userchoice);
    }

    else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin=compselected==="paper"?false:true;
        }
        else{
            if(userchoice==="paper"){
                userwin=compselected==="scissor"?false:true;
             }
             else{
                userwin=compselected==="rock"?false:true;
             }
        }
        winner(userwin,userchoice,compselected);

    }



};

choices.forEach((game) =>{

    game.addEventListener("click", ()=> {

    const userchoice=game.getAttribute("id");
    playgame(userchoice)
    
    })
})