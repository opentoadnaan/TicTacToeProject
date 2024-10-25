let boxes = document.querySelectorAll(".box");
let restbutton = document.querySelector(".reset");
let msgcont=document.querySelector(".msgcont");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".newbutton");
let wincountOo=document.querySelector(".ores");
let wincountXx=document.querySelector(".xres");
let match=document.querySelector(".matchh")

let turn0 = true;
count=0;
matchcount=0;
wincountO=0;
wincountX=0
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const newgame=()=>{
    turn0=true;
    enablebox();
    msgcont.classList.add("hide");
    }
const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcont.classList.add("hide");
    matchcount=0;
    wincountO=0;
    wincountX=0
    match.innerText=0;
    wincountXx.innerText= 0;
    wincountOo.innerText=0;
}

const drawgame=()=>{
    msg.innerText="match is drawn play again!!!"
    msgcont.classList.remove("hide");
    disablebox();
    count=0
    matchcount++;
    match.innerText=matchcount; 
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {// playerO
            box.innerText = "O"
            console.log("clicked")
            turn0 = false
        }
        else { //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let win =checkwinner()
        if(count===9 && !win){
            drawgame()
        }

    });
});

const checkwinner = () => {
    for(let pattern of winpattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != " " && posval3 != " ") {
            if (posval1 === posval2 && posval2 === posval3) {
                showwinner(posval1)
                matchcount++;
                match.innerText=matchcount; 
                count=0;
                return true;
            }
        }
    };
};
const showwinner=(winner)=>{
    msg.innerText=`congratulation ${winner} is winner `;
    if(winner==="X"){
        wincountX++;
        wincountXx.innerText= wincountX;
    }
    else{
        wincountO++;
        wincountOo.innerText=wincountO;
    }
    msgcont.classList.remove("hide");
    disablebox();  
};

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";   
    }
};

newbtn.addEventListener("click",newgame)
restbutton.addEventListener("click",resetgame)