'use strict'

const timetable = {
  timer: null,
  switch: 0,
}
/**
 * 分を返す60秒になったら0秒にする
 * @return {Number}
 */
function milSecToSec(count) {
    return Math.floor(count / 10 % 60);
}
/**
 * 60秒毎に分を返す60分になったら0分にする
 * @return {Number}
 */
function milSecToMin(count) {
  return Math.floor(count / (60*10) % 60);
}
/**
 * 60分に1時間を返す24時間になったら00時間にする
 * @return {Number}
 */
function milSecToHour(count) {
    return Math.floor(count / (60*60*10) % 24);
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
  let count = 0;
  timetable.switch = 1;
  timetable.timer = setInterval(() => {
    count++
    document.getElementById('sec').innerText =
    `${toDoubleDigits(milSecToSec(count))}.${count.toString().slice(-1)}`
    document.getElementById('min').innerText =
    `${toDoubleDigits(milSecToMin(count))}`
    document.getElementById('hour').innerText =
    `${toDoubleDigits(milSecToHour(count))}`
  }, 100);
}
function stop() {
  timetable.switch = 0;
    clearInterval(timetable.timer);
}

function reload() {
  location.reload();
}