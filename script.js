let minutes = 0;
let seconds = 0;

let timer = null;

let display = document.getElementById("timer");

let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let setButton = document.getElementById("set");

let minuteInput = document.getElementById("minutes");


function displayTimer() {

    let min = minutes;
    let sec = seconds;

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    display.innerText = min + ":" + sec;
}


function startTimer() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function() {

        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            timer = null;
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        displayTimer();

    }, 1000);
}


function pauseTimer() {
    clearInterval(timer);
    timer = null;
}


function resetTimer() {

    clearInterval(timer);
    timer = null;

    minutes = 0;
    seconds = 0;

    displayTimer();
}


function setTimer() {

    pauseTimer();

    let value = Number(minuteInput.value);

    if (value < 0 || isNaN(value)) {
        return;
    }

    minutes = value;
    seconds = 0;

    displayTimer();
}


playButton.addEventListener("click", function() {
    startTimer();
});

pauseButton.addEventListener("click", function() {
    pauseTimer();
});

resetButton.addEventListener("click", function() {
    resetTimer();
});

setButton.addEventListener("click", function() {
    setTimer();
});


displayTimer();