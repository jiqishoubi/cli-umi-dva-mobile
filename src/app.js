import { isIPhoneX } from './utils/utils'
import { prodHostArr } from './utils/consts'

/**
 * 卸载serviceWorker
 */
if (window.navigator.serviceWorker) {
  navigator.serviceWorker
    .getRegistrations()
    .then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
}

// /**
//  * 判断是否为iphoneX，并保存在window对象上
//  */
// window.isX = isIPhoneX()

/**
 * 判断是否是生产环境
 */
let url = window.location.href
let isProd = false
for (let i = 0; i < prodHostArr.length; i++) {
  if (url.indexOf(prodHostArr[i]) > -1) {
    isProd = true
    break
  }
}
window.isProd = isProd

export const dva = {
  config: {
    onError(err) {
      err.preventDefault()
      console.error(err.message)
    },
  },
}
