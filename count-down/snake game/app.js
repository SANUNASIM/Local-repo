//Gmae Constant & Variables
let inputDir = { x: 0, y: 0 };
// const foodsound = new Audio('food.mp3');
// const gameoversound = new Audio('gameover.mp3');
// const movesound = new Audio('move.mp3');
// const musicsound = new Audio('music.mp3');
let speed = 6;
let score = 0;
let lastPainttime = 0;
let snakeArr = [
    { x: 10, y: 13 }
]
food = { x: 11, y: 12 };
//Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPainttime) / 1000 < 1 / speed) {
        return;
    }
    lastPainttime = ctime;
    gameEngine();
}
function iscollide(snake) {
    //if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    //if you bump into the wall
    if (snake[0].x >= 28 || snake[0].x <= 0 || snake[0].y >= 28 || snake[0].y <= 0) {
        return true;
    }
}
function gameEngine() {
    // part 1 :updating the snake array & food
    if (iscollide(snakeArr)) {
        // gameoversound.play();
        // musicsound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game over. press any key to play again!");
        snakeArr[{ x: 13, y: 15 }];
        // musicsound.play();
        score = 0;
    }


    //if you eaten up food ,increment the score,regenerate food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // foodsound.play();
        score += 1;
        if (score > hiscore) {
            hisocreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hisocreval))
            hiscoreBox.innerHTML = "Hiscore: " + hisocreval;
        }
        scoreBox.innerHTML = "score:" + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        let a = 2;
        let b = 24;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // Moving the Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part 2:Render the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    //display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}




//Main logic starts here
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
    hisocreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hisocreval))
}
else {
    hisocreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "Hiscore: " + hisocreval;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }//start the game
    // movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }

})



