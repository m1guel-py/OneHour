//
// Variables
//
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

//
// Call functions
//

buttonStart.addEventListener("click", getStarted);
buttonReset.addEventListener("click", reset);

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
    }
    else {
        minute = 15;
        seconds = 0;
    }
}