import request from './network.js';



export function getMultiData(){
  return request({
    url: '/api/v1/home/multidata'
  })
}