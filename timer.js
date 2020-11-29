'use strict'
let counter = 0;
const timetable = {
  sec: 0,
  min: 0,
  hour: 0
}
function milSecToSec() {
  if (counter < 600) {
    return timetable.sec = counter / 10;
  } else {
    return timetable.sec = (counter % 600) / 10;
  }
}


setInterval(() => {
  counter++;
  if (milSecToSec() % 1 > 0) {
    document.getElementById('timer').innerText =
    `${milSecToSec()}秒` 
  } else {
    document.getElementById('timer').innerText =
    `${milSecToSec()}.0秒`
  }

}, 100);