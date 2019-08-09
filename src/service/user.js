import fly from '@/utils/request'

// 登陆接口
export let login = code => {
  return fly.post('/user/code2session', {code})
}

// 解密数据
export let decrypt = code => {
  return fly.post('/user/decrypt', code)
}

// 生物认证
export let fingerPrint = code => {
  return fly.post('/user/fingerPrint', code)
}
