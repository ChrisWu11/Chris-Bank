
import axios from 'axios'

const request = axios.create()

export const getType = data => {
  return request({
    url: '/typeList',
    method: 'get',
  })
}

export const getVueList = data => {
  return request({
    url: '/vue',
    method: 'get',
  })
}

export const getReactList = data => {
  return request({
    url: '/react',
    method: 'get',
  })
}
export const getHtmlList = data => {
  return request({
    url: '/html',
    method: 'get',
  })
}
export const getCssList = data => {
  return request({
    url: '/css',
    method: 'get',
  })
}
export const getNetList = data => {
  return request({
    url: '/net',
    method: 'get',
  })
}
export const getWriteList = data => {
  return request({
    url: '/write',
    method: 'get',
  })
}
export const getOptimizeList = data => {
  return request({
    url: '/optimize',
    method: 'get',
  })
}

export const getNodeList = data => {
  return request({
    url: '/node',
    method: 'get',
  })
}

export const getWebpackList = data => {
  return request({
    url: '/webpack',
    method: 'get',
  })
}

export const getJavascriptList = data => {
  return request({
    url: '/javascript',
    method: 'get',
  })
}