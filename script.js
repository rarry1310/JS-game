let gameContainer = document.getElementById('gameContainer');
let square = document.getElementById('square');


let leftRight = [0,50,100,150,200,250,300,350,400];
let UpDown = [0,50,100,150,200,250,300,350,400];

let id = 5;
function squareMove () {
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,1);
    function frame () {
        if(pos == 1) {
            clearInterval(id);
        }
        else {
            pos++;
            getRandomPosition()
        }
    }
}

function getRandomPosition () {
    square.style.top = leftRight[Math.floor(Math.random() * leftRight.length)] + 'px';
    square.style.left = UpDown[Math.floor(Math.random() * UpDown.length)] + 'px';
}