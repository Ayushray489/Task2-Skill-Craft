let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    document.getElementById("time").innerHTML = txt;
}

function startPause() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 10);
        document.getElementById("startPauseBtn").innerHTML = "Pause";
        isRunning = true;
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById("startPauseBtn").innerHTML = "Start";
    }
}

function stop() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById("startPauseBtn").innerHTML = "Start";
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    document.getElementById("startPauseBtn").innerHTML = "Start";
    isRunning = false;
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        let lapTime = timeToString(elapsedTime);
        let lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        document.getElementById("laps").appendChild(lapItem);
    }
}
