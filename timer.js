'use strict'
let counterMilSec = 0;
const timetable = {
  milSec: 0,
  sec: 0,
  min: 0,
  hour: 0
}
/**
 * 10分の１秒を返す
 * @return {String} 10分の１秒
 */
function milSec() {
  return timetable.milSec = counterMilSec + '';
}
/**
 * 分を返す60秒になったら0秒にする
 * @return {Number}
 */
function milSecToSec() {
    timetable.sec++
    if (timetable.sec === 600) {
      return timetable.sec = 0;
    } else {
    return timetable.sec / 10;
    }
}
/**
 * 60秒毎に分を返す
 * @return {Number}
 */
function milSecTomin(){
  return timetable.min = Math.floor(counterMilSec / 600);
}

function toDoubleDigits(num){
  num.toString(10);

}

setInterval(() => {
  counterMilSec++;
    document.getElementById('timer').innerText =
    `${milSecTomin()}分${Math.floor(milSecToSec())}.${milSec().slice(-1)}秒` 
}, 100);