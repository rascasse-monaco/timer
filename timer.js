'use strict'
import { makeDoubleDigits, countToTime } from './time-handling-util.js';

let count = 0;
let setIntervalID = null;

//スタートボタンの動作。
function startBtn() {
    replaceButton('button', 'start','button', 'startDeactivate', 'Start');
    replaceButton('button', 'stopDeactivate','button', 'stop', 'Stop');
    start();
    const stopButton = document.getElementById('stop');
    stopButton.addEventListener( 'click', stop, false );
}

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
function stop() {
  replaceButton('button', 'startDeactivate','button', 'start', 'Start');
  replaceButton('button', 'stop','button', 'stopDeactivate','Stop');
  clearInterval(setIntervalID);
  const startButton = document.getElementById('start');
  startButton.addEventListener( 'click', startBtn, false );
}

function reload() {
  location.reload();
}

function replaceButton(parentID, oldChildID, createElement, newChildID, innerHTMLtext) {
  const parentElement = document.getElementById(`${parentID}`);
  const oldChild = document.getElementById(`${oldChildID}`)
  const newChild = document .createElement(`${createElement}`);
  newChild.setAttribute('type', 'button');
  newChild.setAttribute('class', 'button');
  newChild.setAttribute('id', `${newChildID}`);
  newChild.innerHTML = innerHTMLtext;
       
  parentElement.replaceChild(newChild, oldChild);
}

const startButton = document.getElementById('start');
startButton.addEventListener( 'click', startBtn, false );

const reloadButton = document.getElementById('reload');
reloadButton.addEventListener( 'click', reload, false );