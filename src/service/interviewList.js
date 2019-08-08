import fly from '@/utils/request'

// 获取面试列表
export let sign = params => {
  return fly.get('/sign?status=' + params)
}
// 更改面试
export let changeSign = params => {
  return fly.put('/sign/' + params.id, { remind: params.remind })
}
export let newSign = params => {
  return fly.get('/sign/' + params)
}
