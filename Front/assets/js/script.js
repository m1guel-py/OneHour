let time = document.getElementById("timer");
const start = document.getElementById("start");

minute = 30;
seconds = 0;

start.addEventListener("click", iniciar, {once: true});

function iniciar() {
    setInterval(timerStudy, 1000);
}

function timerStudy() {
    if (seconds <= 0) {
        minute--;
        seconds = 60;
    }

    seconds--;

    time.innerText = `${minute} : ${String(seconds).padStart(2, "0")}`;
}