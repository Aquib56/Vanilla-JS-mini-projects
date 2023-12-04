const daysEl = document.getElementById("daysEl");
const monthsEl = document.getElementById("monthsEl");
const hoursEl = document.getElementById("hoursEl");
const minsEl = document.getElementById("minsEl");
const secondsEl = document.getElementById("secondsEl");

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const months = (newYearsDate.getFullYear() - currentDate.getFullYear()) * 12 +
    (newYearsDate.getMonth() - currentDate.getMonth());
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);