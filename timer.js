'use strict'
import { makeDoubleDigits, countToTime } from './time-handling-util.js';
import { replaceButton, buttonEventListener } from './button-util.js';

let count = 0;
let setIntervalID = null;

//EventListenerの設定。
buttonEventListener('start', 'click', startBtn);
buttonEventListener('reload', 'click', reload);

//スタートボタンの動作。
function startBtn() {
    replaceButton('button', 'start','button', 'startDeactivate', 'Start');
    replaceButton('button', 'stopDeactivate','button', 'stop', 'Stop');
    start();
    buttonEventListener('stop', 'click', stop);
}
//タイマー表示&時間更新用関数。
function start() {
  setIntervalID = setInterval(() => {
    count++
    document.getElementById('sec').innerText =
    `${makeDoubleDigits(countToTime(count).sec)}.${count.toString().slice(-1)}`
    document.getElementById('min').innerText =
    `${makeDoubleDigits(countToTime(count).min)}`
    document.getElementById('hour').innerText =
    `${makeDoubleDigits(countToTime(count).hour)}`
  }, 100);
}
//ストップボタンの動作。
function stop() {
  replaceButton('button', 'startDeactivate','button', 'start', 'Start');
  replaceButton('button', 'stop','button', 'stopDeactivate','Stop');
  clearInterval(setIntervalID);
  buttonEventListener('start', 'click', startBtn);
}
//リセットボタンの動作。
function reload() {
  location.reload();
}