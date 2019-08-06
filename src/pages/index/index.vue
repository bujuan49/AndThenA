<template>
  <div class="homewrap">
    <div class="content">
      <map name=""></map>
    </div>
    <div class="footer" @click="addinterview()">添加面试</div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: ''
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
.homewrap{
  width: 100%;
  height: 100%;
  background: pink;
  display: flex;
  flex-direction: column;
  .content{
    width: 100%;
    flex:1;
  }
  .footer{
    width: 100%;
    height: 100rpx;
    background:#001;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
  }
}
</style>
