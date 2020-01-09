import axios from "axios"
import Qs from 'qs'
import { localTokenKey } from './consts'
import { globalHost } from './utils'

let timer
//一、超时
const timeOut = (delay) => {
  return new Promise((resolve) => {
    timer = window.setTimeout(() => {
      resolve({
        resultCode: '100',
        systemMessage: '网络连接超时，请稍后再试',
      })
    }, delay)
  })
}
//二、请求func
const request_real = (type, url, headers, data) => {
  return axios({
    method: type,
    url: url,
    headers: headers,
    data: Qs.stringify(data),
    processData: false,
    cache: false,
  })
    .then((response) => {
      window.clearTimeout(timer)
      return response.data
    })
    .catch((error) => {
      window.clearTimeout(timer)
      return (error)
    })
}

/**
 * 暴露出去
 */
const requestw = ({
  type = 'post',
  url,  //api后端路径
  headers,
  data,
  delay = 240000, //超时时间
}) => {
  let token = localStorage.getItem(localTokenKey) ? localStorage.getItem(localTokenKey) : null

  //处理各种参数
  let typeTemp,
    urlTemp,
    dataTemp,
    headersTemp

  //type
  typeTemp = type

  //url
  urlTemp = url.indexOf('http') > -1 ? url : globalHost() + url

  //data
  dataTemp = {
    token: token ? token : null,
    ...data
  }
  if (type == 'formdata') {
    typeTemp = "post"
    let formData = new FormData()
    for (let key in data) {
      if (data[key] !== undefined && data[key] !== null) {
        formData.append(key, data[key])
      }
    }
    dataTemp = formData
  }

  //headers
  headersTemp = {
    Authorization: token ? token : null,
    ...headers
  }

  //处理各种参数 end

  let p1 = timeOut(delay)
  let p2 = request_real(typeTemp, urlTemp, headersTemp, dataTemp)

  //p1 p2赛跑
  return Promise.race([p1, p2])
    .then((res) => {
      return res
    })
}

export default requestw