var canvasBox = document.getElementById("canvas");
//console.log(canvasBox)
canvasBox.addEventListener("click", handleONcLICK);

function handleONcLICK() {
    let x = window.getComputedStyle(canvasBox).width;
    console.log(x)
}

let context = canvasBox.getContext("2d");
context.fillStyle = 'black';
canvasBox.width = 1000;
canvasBox.height = 100;


let ran = Math.random() * 100

for (let i = 0; i < 1500; i += 10) {
    context.fillRect(i, Math.random() * 100, 5, ran);
}

let count = 0;
let percent = 15;
context.fillStyle = 'tomato';

function draw() {
    context.fillRect(count, Math.random() * 100, 5, ran);
    count += 5;
    if (count > 100 / 1) {
        return;
    }
    window.requestAnimationFrame(draw);
}

draw();


const audioPlayer = document.getElementById('player');
function handlePlay() {
    audioPlayer.play();
}
function handlePause() {
    audioPlayer.pause();
}
let time = 0
function handleForward() {
    time = time + 20;
    audioPlayer.currentTime = time;
}

