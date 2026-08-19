let time = document.getElementById("timer");
let start = document.getElementById("start");
const reset = document.getElementById("reset");
let timerCent = document.getElementById("center");
let cycleText = document.getElementById("cycle")
let idStart;

let cycle = 1;
let minute = 0;
let seconds = 3;
let mode = 0;

start.addEventListener("click", iniciar);
reset.addEventListener("click", resetar)

function iniciar() {
    if (mode == 0){
        idStart = setInterval(timerStudy, 1000);
        start.innerText = "Pause";
        start.classList.add("paused")
        mode = 1;
    } else {
        clearInterval(idStart);
        mode = 0;
        start.innerText = "Start";
        start.classList.remove("paused")
    }
}

function timerStudy() {
    if (minute === 0 && seconds === 0) {
        clearInterval(idStart);
        location.href = "pages/break.html";
        cycle = 3
        cycleText.innerText = `Cycle ${String(cycle)} of 3`;
        return;
    }
    if (seconds <= 0) {
        minute--;

        if (minute > 0){
            seconds = 60;
        }
    }

    seconds--;

    time.innerText = `${String(minute).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
}

function resetar() {
    minute = 30;
    seconds = 0;
    clearInterval(idStart)
    time.innerText = `${String(minute).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
    mode = 0
    start.innerText = "Start";
    start.classList.remove("paused")
}