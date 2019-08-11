import { reject } from "q";
import { relative } from "path";

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export function getLocation () {
  return new Promise(resolve, reject) => {
    wx.getLocation({
      type:'gcj02',
      success(res){
        relative(res)
      }
    })
  }
};

export function debounce (func, del) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(cotext, args);
    }, del);
  }
}

export default {
  formatNumber,
  formatTime,
  getLocation,
  debounce
}
