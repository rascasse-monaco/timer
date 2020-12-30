'use strict';

//ボタン表示変更リプレース用関数
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

//ボタンのaddEventListener設定用関数
function buttonEventListener(ID, event, funcName,) {
  const ButtonID = document.getElementById(`${ID}`);
  ButtonID.addEventListener( `${event}`, funcName, false);
}

export { replaceButton, buttonEventListener };