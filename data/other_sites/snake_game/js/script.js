// Constants and Variables
let inputDir = {x:0,y:0};
const foodSound = new Audio("data/music/food.mp3");
const gameOverSound = new Audio("data/music/gameOver.mp3");
const moveSound = new Audio("data/music/move.mp3");
const musicSound = new Audio("data/music/music.mp3");
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]
let food = {x:7, y:7};
let score = 0;

// Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime;
    // console.log(ctime);
    gameEngine();
}
function isCollide(snake){
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // if you bump into wall 
    if (snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0) {
        return true;
    }
    
}

function gameEngine() {
    //part1 - Updating Snake Array & Food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0,y:0};
        alert("Game Over! Press any key to play again..");
        snakeArr = [{x:13, y:15}];
        // musicSound.play();
        score = 0;
        scoreBox.innerHTML = `Score: ${score}`;
    }

    // if you have eaten food, increment teh score and regenerate the food
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        foodSound.play();
        score +=1;
        if (score>highScoreValue){
            highScoreValue=score;
            localStorage.setItem('highScore', JSON.stringify(highScoreValue));
            highScoreBox.innerHTML = `High Score: ${highScoreValue}`
        }
        scoreBox.innerHTML = `Score: ${score}`;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y: snakeArr[0].y + inputDir.y});
        let a=2;
        let b=16;
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())};
    }

    //Moving the Snake
    for (let i = snakeArr.length -2 ; i >=0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part2 - display snake and food
    //Display Snake
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index===0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    //Display Food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}



//Main Logic
let highScore = localStorage.getItem('highScore');
console.log(highScore);
if (highScore === null){
    highScoreValue = 0;
    localStorage.setItem('highScore', JSON.stringify(highScoreValue));
}
else{
    highScoreValue = JSON.parse(highScore);
    console.log(highScoreValue);
    highScoreBox.innerHTML = `High Score: ${highScore}`;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x:0,y:1}                    //start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});