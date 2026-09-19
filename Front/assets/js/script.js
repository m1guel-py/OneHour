//
// Variables
//

// Logic

let timerDisplay = document.getElementById("timer");
let buttonStart = document.getElementById("start");
let buttonReset = document.getElementById("reset");
let timerCent = document.getElementById("center");
let cycleText = document.getElementById("cycle");
let idStart;

let cycle = 1;
let minute = 0;
let seconds = 2;
let changeButton = true;

// CSS Change

let link = document.getElementById("cssLink");

// HTML Change

let logoImage = document.getElementById("logotype");
let aspasImage = document.getElementById("aspas");
let modeText = document.getElementById("mode");
let authorText = document.getElementById("author");
let reflectionText = document.getElementById("reflexao");

// timeline objects
let timeline1 = document.getElementById("timeline1");
let timeline2 = document.getElementById("timeline2");
let timeline3 = document.getElementById("timeline3");

// Song
let soundChangeCycle = new Audio("./assets/audio/alarm.mp3");
let tapButton = new Audio("./assets/audio/tap.mp3");

//
// Call functions
//

buttonStart.addEventListener("click", () => {
    getStarted();
    tapButton.currentTime = 0;
    tapButton.play();
});
buttonReset.addEventListener("click", () => {
    reset();
    tapButton.currentTime = 0;
    tapButton.play();
});

//
// Functions
//

// Toggles the timer between running and paused states.
function getStarted() {
    // Change button to Pause and start interval.
    if (changeButton){
        idStart = setInterval(timer, 1000);
        buttonStart.innerText = "Pause";
        buttonStart.classList.add("paused");
        changeButton = !changeButton;
    // Change button to Start and pause interval.
    } else {
        clearInterval(idStart);
        changeButton = !changeButton;
        buttonStart.innerText = "Start";
        buttonStart.classList.remove("paused");
    }
}

// This is Timer.
function timer() {
    // Check seconds for change minutes and seconds.
    if (seconds <= 0) {
        minute--;

        if (minute > 0){
            seconds = 60;
        }
    }

    // Check if the timer ended.
    if (minute === 0 && seconds === 1) {
        cycle >= 3 || cycle < 0? cycle = 1 : cycle+=1;
        cycleText.innerText = `Cycle ${String(cycle)} of 3`;
        tapButton.currentTime = 0;
        soundChangeCycle.currentTime = 0;
        soundChangeCycle.play();
        reset();
    }
    else {
        seconds--;
    }

    // Show value timer.
    timerDisplay.innerText = `${String(minute).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
}

// Reset Timer for begin.
function reset() {
    typeCycle();
    clearInterval(idStart);
    timerDisplay.innerText = `${String(minute).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
    changeButton = !changeButton;
    buttonStart.innerText = "Start";
    buttonStart.classList.remove("paused");
}

// Cycle mode
function typeCycle(){
    if (cycle != 2){
        minute = 30;
        seconds = 0;
        link.href = "./assets/css/style.css";
        logoImage.src = "./assets/image/logo.png";
        aspasImage.src = "./assets/image/aspas.png";
        timelineSelect();
        changeCycleText();
    }
    else {
        minute = 0;
        seconds = 3;
        link.href = "./assets/css/break.css";
        logoImage.src = "./assets/image/logoBreak.png";
        aspasImage.src = "./assets/image/aspasBreak.png";
        timelineSelect();
        changeCycleText();
    }
}

function timelineSelect(){
    if (cycle == 1){
        timeline1.classList.add("selectT");
        timeline3.classList.remove("selectT");
    }
    else if (cycle == 2){
        timeline2.classList.add("selectT");
        timeline1.classList.remove("selectT");
    }
    else {
        timeline3.classList.add("selectT");
        timeline2.classList.remove("selectT");
    }
}

function changeCycleText(){
    if (cycle != 2){
        modeText.innerHTML = "Focus";
        reflectionText.innerHTML = "Without discipline, talent is useless.";
        authorText.innerHTML = "- Cristiano Ronaldo";
    }
    else {
        modeText.innerHTML = "Break";
        reflectionText.innerHTML = "Resting is also part of the journey.";
        authorText.innerHTML = "- Alisson Zigulich";
    }
}