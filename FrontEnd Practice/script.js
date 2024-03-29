/* var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes * 60 * 1000);

function time_remaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}
function run_clock(m, s, endtime) {
    var minutes_counter = document.getElementById(m);
    var seconds_counter = document.getElementById(s);
    function update_clock() {
        var t = time_remaining(endtime);
        minutes_counter.innerHTML = t.minutes;
        seconds_counter.innerHTML = t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    update_clock();
    var timeinterval = setInterval(update_clock, 1000);
}
run_clock("minutes", "seconds", deadline);
 */
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("slideForm").classList.remove("hidden");
        document.getElementById("slideForm").style.bottom = "0";
    }, 15000);

    document.getElementById("closeBtn").addEventListener("click", function () {
        document.getElementById("slideForm").style.bottom = "-400px";
        setTimeout(function () {
            document.getElementById("slideForm").classList.add("hidden");
        }, 500);
    });
});

const countdownTime = 10 * 60 * 1000; // 10 minutes
const timerElementMinute = document.getElementById("minutes");
const timerElementSecond = document.getElementById("seconds");
function updateTimerDisplay(remainingTime) {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    timerElementMinute.textContent = minutes;
    timerElementSecond.textContent = seconds;
}
function startCountdown() {
    let startTime = Date.now();
    function update() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = countdownTime - elapsedTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            // Here you can add additional actions when the countdown ends
            return;
        }

        updateTimerDisplay(remainingTime);
    }

    update();
    const timerInterval = setInterval(update, 1000);
}
startCountdown();
