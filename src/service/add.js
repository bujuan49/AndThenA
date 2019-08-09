import fly from '@/utils/request'
export const addSign = payload => {
  return fly.post('/sign', payload)
}