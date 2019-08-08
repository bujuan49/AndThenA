import fly from '@/utils/request'
export const addSign = payload => {
  fly.post('/sign', {payload})
}