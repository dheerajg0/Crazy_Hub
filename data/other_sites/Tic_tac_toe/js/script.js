console.log("Tic-Tac-Toe")
let music = new Audio("data/music.mp3")
let turnAudio = new Audio("data/ting.mp3")
let gameOverAudio = new Audio("data/gameOver.mp3")
let turn = "X"
let gameOver = false

// Function to change turn
function changeTurn(){
    return turn === "X"?"O":"X"
}

//Function to check win
function winCheck(){
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [2,4,6,5,15,135],
        [0,4,8,5,15,45]
    ];
    wins.forEach(e =>{
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = `${boxTexts[e[0]].innerText} WON !!!`;
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "15vw";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            let boxes = document.getElementsByClassName("box");
            Array.from(boxes).forEach(element => {
                $(element).click(function(event){
                    event.preventDefault();
                });
        })
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if (boxText.innerText ===""){
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            winCheck();
            if (!gameOver){
                document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`
            }
        }
    })
});

// Reset Button Logic
reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = 0;
    document.querySelector(".line").style.width = "0vw";
})

