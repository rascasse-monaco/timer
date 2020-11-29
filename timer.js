'use strict'
let timer = null;
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
  timetable.milSec++
  return timetable.milSec + '';
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
  timetable.min++
  return Math.floor(timetable.min / 600);
}
/**
 * 10の位に0を挿入して数字の桁数を合わせる
 * @return {String} 0を足した文字列
 * @param {Number} num 秒、分など
 */
function toDoubleDigits(num){
  num += '';
  if (num.length === 1) {
    return num = `0${num}`;
  } else {
    return num;
  }
}

function start() {
  timer = setInterval(() => {
    document.getElementById('timer').innerText =
    `${toDoubleDigits(milSecTomin())}分` +
    `${toDoubleDigits(Math.floor(milSecToSec()))}.${milSec().slice(-1)}秒` 
  }, 10);
}
function stop() {
  clearInterval(timer);
}

