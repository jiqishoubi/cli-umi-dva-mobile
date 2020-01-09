import { hostObj } from './consts'

/**
 * 获取请求域名
 */
export const globalHost = () => {
  return window.isProd ? hostObj.prod : hostObj.dev
}

/**
 * 格式化日期
 */
// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18  
export const formatDate = (date, fmt) => {
  var o = {
    "M+": date.getMonth() + 1,                 //月份   
    "d+": date.getDate(),                    //日   
    "h+": date.getHours(),                   //小时   
    "m+": date.getMinutes(),                 //分   
    "s+": date.getSeconds(),                 //秒   
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
    "S": date.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

//格式化金钱
export const toMoney = (val) => { //数字
  var str = (Number(val) / 100 * 100).toFixed(2) + '';
  var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');//取到整数部分
  var dot = str.substring(str.length, str.indexOf("."))//取到小数部分搜索
  var ret = intSum + dot;
  return ret;
}

//让 函数 一段时间只能执行一次
export const throttle = (func, wait) => {
  let lasttime = 0
  return () => {
    //arguments 参数
    //this
    let nowtime = new Date().getTime()
    if ((nowtime - lasttime) > wait) {
      func.apply(this, arguments)
      lasttime = nowtime
    }
  }
}

// 取得url参数
export const getUrlParam = (key) => {
  let url = window.location.href
  if (url.indexOf(key + '=') > -1) {
    let strBack = url.split(key + '=')[1] //key=后面的str
    if (strBack.indexOf('&') > -1) { //后面还有参数
      let value = strBack.split('&')[0]
      return value
    } else { //后面没参数了
      return strBack
    }
  } else {
    return null
  }
}

//获取cookieObj
export const getCookieObj = () => {
  let cookieStr = document.cookie
  let cookieArr = cookieStr.split(';')
  let cookieObj = {}
  cookieArr.forEach(function (str) {
    let key = str.split('=')[0]
    let value = str.split('=')[1]
    cookieObj[key] = value
  })
  return cookieObj
}

//判断是否是IOS
export const isIOS = () => {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isIOS;
}

/**
 * 判断是否iPhoneX
 */
export const isIPhoneX = () => {
  let flag = false
  if (
    isIOS() &&
    (
      (window.devicePixelRatio &&
        window.devicePixelRatio === 3 &&
        window.screen.width === 375 &&
        window.screen.height === 812) ||
      (window.devicePixelRatio &&
        window.devicePixelRatio === 3 &&
        window.screen.width === 414 &&
        window.screen.height === 896) ||
      (window.devicePixelRatio &&
        window.devicePixelRatio === 2 &&
        window.screen.width === 414 &&
        window.screen.height === 896)
    )
  ) {
    flag = true
  }
  return flag
}