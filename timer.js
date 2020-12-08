'use strict'
const timetable = {
  timer: null,
  switch: 0,
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
    if (timetable.sec === 60*10) {
      return timetable.sec = 0;
    } else {
    return timetable.sec / 10;
    }
}
/**
 * 60秒毎に分を返す60分になったら0分にする
 * @return {Number}
 */
function milSecToMin() {
  timetable.min++
  if (timetable.min === 60*60*10){
    return timetable.min = 0;
  } else {
  return Math.floor(timetable.min / (60*10));
  }
}
/**
 * 60分に1時間を返す24時間になったら00時間にする
 * @return {Number}
 */
function milSecToHour() {
  timetable.hour++
  if (timetable.hour === 24*60*60*10) {
    return timetable.hour = 0;
  } else {
    return Math.floor(timetable.hour / (60*60*10));
  }
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
//スタート後スタートボタンを二回押しできなくする。
function startBtn() {
  if (timetable.switch === 0) {
    start();
  } else {}
}

function start() {
  timetable.switch = 1;
  timetable.timer = setInterval(() => {
    document.getElementById('sec').innerText =
    `${toDoubleDigits(Math.floor(milSecToSec()))}.${milSec().slice(-1)}`
    document.getElementById('min').innerText =
    `${toDoubleDigits(milSecToMin())}`
    document.getElementById('hour').innerText =
    `${toDoubleDigits(milSecToHour())}`
  }, 100);

  console.log(`start時timetable.timer=${timetable.timer}`);
}
function stop() {
  timetable.switch = 0;
      clearInterval(timetable.timer);
    console.log(`stop時timetable.timer=${timetable.timer}`);
}

function reload() {
  location.reload();
}