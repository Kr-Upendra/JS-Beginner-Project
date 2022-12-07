setInterval(() => {
  d = new Date();
  hoursTime = d.getHours();
  minuteTime = d.getMinutes();
  secondsTime = d.getSeconds();
  hourRotation = 30 * hoursTime + minuteTime / 2;
  minuteRotation = 6 * minuteTime;
  secondRotation = 6 * secondsTime;
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

const clock = document.querySelector(".digitalClock");
const dcHour = document.querySelector(".dc_hour");
const dcMinute = document.querySelector(".dc_minute");
const dcSecond = document.querySelector(".dc_second");
const dcSession = document.querySelector(".dc_am");

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
  dcHour.innerText = hh + " :";
  dcMinute.innerText = mm + " :";
  dcSecond.innerText = ss + " ";
  dcSession.innerText = session;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

const clockarea = document.querySelector(".clockarea");
const analogClock = document.querySelector(".clock");
const theme = document.querySelector(".theme");
const number = document.querySelectorAll(".num");
function changeColor() {
  let index = document.querySelector(".theme").selectedIndex;

  if (index === 0) {
    document.body.style.backgroundColor = "#27272b";
    clockarea.style.backgroundColor = "#27272b";
    analogClock.style.backgroundColor = "#27272b";
    theme.style.backgroundColor = "#27272b";
    theme.style.color = "#ffffff3b";
    dcSession.style.color = "#ffffff3b";
    for (let i = 0; i < number.length; i++) {
      number[i].style.color = "#ffffff3b";
    }
  } else if (index === 1) {
    document.body.style.backgroundColor = "white";
    clockarea.style.backgroundColor = "white";
    analogClock.style.backgroundColor = "white";
    theme.style.backgroundColor = "white";
    theme.style.color = "#00000071";
    dcSession.style.color = "#00000071";
    for (let i = 0; i < number.length; i++) {
      number[i].style.color = "#00000071";
    }
  } else if (index === 2) {
    document.body.style.backgroundColor = "#000000";
    clockarea.style.backgroundColor = "#000000";
    analogClock.style.backgroundColor = "#000000";
    theme.style.backgroundColor = "#000000";
    theme.style.color = "#ffffff3b";
    dcSession.style.color = "#ffffff3b";
    for (let i = 0; i < number.length; i++) {
      number[i].style.color = "#ffffff3b";
    }
    clockarea.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 3px 8px";
    analogClock.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 3px 8px";
  }
}

// changeColor();
