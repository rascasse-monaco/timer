'use strict'

const globalTable = {
  timer: null,
  switch: 0,
}
/**
 * conuntを時間に変換
 * @param {Number} 1/10秒の数を入れる。
 * @return {Number}
 */
function countToTime(count) {
  return {
    sec: Math.floor(count / 10 % 60),//分を返す60秒になったら0秒にする
    min: Math.floor(count / (60*10) % 60),//60秒毎に分を返す60分になったら0分にする
    hour: Math.floor(count / (60*60*10) % 24)//60分に時間を返す24時間になったら00時間にする
  }
}
/**
 * 10の位に0を挿入して数字の桁数を合わせる
 * @return {String} 0を足した文字列
 * @param {Number} num 秒、分など
 */
function makeDoubleDigits(num){
  num += '';
  if (num.length === 1) {
    return num = `0${num}`;
  } else {
    return num;
  }
}
//スタート後スタートボタンを二回押しできなくする。
function startBtn() {
  if (globalTable.switch === 0) {
    start();
    console.log(start.name);
  }
}

function start() {
  let count = 0;
  globalTable.switch = 1;
  globalTable.timer = setInterval(() => {
    count++
    document.getElementById('sec').innerText =
    `${makeDoubleDigits(countToTime(count).sec)}.${count.toString().slice(-1)}`
    document.getElementById('min').innerText =
    `${makeDoubleDigits(countToTime(count).min)}`
    document.getElementById('hour').innerText =
    `${makeDoubleDigits(countToTime(count).hour)}`
  }, 100);
}
function stop(intervalID) {
  globalTable.switch = 0;
  clearInterval(intervalID);
}

function reload() {
  location.reload();
}