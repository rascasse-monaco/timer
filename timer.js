'use strict'

let setIntervalID = null;
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
//スタートボタンの動作。
function startBtn() {
    replaceButton('button', 'start','button', 'startDeactivate', '','Start');
    replaceButton('button', 'stopDeactivate','button', 'stop', 'stop(setIntervalID)','Stop');
    start();
}

function start() {
  let count = 0;
  setIntervalID = setInterval(() => {
    count++
    document.getElementById('sec').innerText =
    `${makeDoubleDigits(countToTime(count).sec)}.${count.toString().slice(-1)}`
    document.getElementById('min').innerText =
    `${makeDoubleDigits(countToTime(count).min)}`
    document.getElementById('hour').innerText =
    `${makeDoubleDigits(countToTime(count).hour)}`
  }, 1);
}
function stop(intervalID) {
  replaceButton('button', 'startDeactivate','button', 'start', 'startBtn()','Start');
  replaceButton('button', 'stop','button', 'stopDeactivate', '','Stop');
  clearInterval(intervalID);
}

function reload() {
  location.reload();
}

function replaceButton(parentID, oldChildID, createElement, newChildID, onclick, innerHTMLtext) {
  const parentElement = document.getElementById(`${parentID}`);
  const oldChild = document.getElementById(`${oldChildID}`)
  const newChild = document .createElement(`${createElement}`);
  newChild.setAttribute('type', 'button');
  newChild.setAttribute('class', 'button');
  newChild.setAttribute('id', `${newChildID}`);
  newChild.setAttribute('onclick', `${onclick}`);
  newChild.innerHTML = innerHTMLtext;
       
  parentElement.replaceChild(newChild, oldChild);
}