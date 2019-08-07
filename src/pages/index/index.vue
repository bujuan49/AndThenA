<template>
  <div class="homewrap">
    <div class="content">
      <map id="map" name="" show-location :longitude="longitude" :latitude="latitude" :markers="markers"></map>
      <cover-view class="location" @click="location">
        <button><img src="https://i.52112.com/icon/jpg/256/20160808/2722/142190.jpg" alt=""></button>
      </cover-view>
      <div><img src="https://i.52112.com/icon/jpg/256/20160616/2231/122256.jpg" alt=""></div>
    </div>
    <navigator url="/pages/interview/main" class="footer">添加面试</navigator>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  data () {
    return {
     markers:[]
    }
  },

   computed: {
    ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: 'home/getLocation'
    })
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
*{
  margin:0;
  padding: 0;
}
.homewrap{
  width: 100%;
  height: 100%;
  background: pink;
  display: flex;
  flex-direction: column;
  .content{
    width: 100%;
    flex:1;
    map{
      width: 100%;
      height: 100%;
    }
    .location{
      position: fixed;
      top:50rpx;
      left:20rpx;
     img{
        width: 50rpx;
        height: 40rpx;
      }
    }
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
