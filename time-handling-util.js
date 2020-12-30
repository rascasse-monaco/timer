'use strict';

/**
 * 数値を文字列にして、１桁のとき'0'を先頭にする２桁に変換
 * @param {Number}
 * @return {Number}
 */
function makeDoubleDigits(num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};

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

export { makeDoubleDigits, countToTime };