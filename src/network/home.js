import {request} from "@/network/request";

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

//该接口已付费
// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }

export function getHomeGoods(type, page) {
  return request({
    url: 'https://test.water555.xyz/learn-laravel/public/index.php/api/apitest',
    // url: 'http://www.laravel.cn/api/apitest',
    params: {
      type,
      page
    }
  })
}