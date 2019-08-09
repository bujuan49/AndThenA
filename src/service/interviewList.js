import fly from '@/utils/request'

// 获取面试列表
export let sign = params => {
  if (params) {
    return fly.get('/sign?status=' + params)
  } else {
    return fly.get('/sign')
  }
}
// 更改面试
export let changeSign = params => {
  console.log(params)
  return fly.put('/sign/' + params.id, { remind: params.remind, status: params.status })
}
// 获取详情
export let newSign = params => {
  return fly.get('/sign/' + params)
}
