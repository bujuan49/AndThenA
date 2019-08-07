<template>
  <div class="serveBox">
    <div class="boxTop">
      <p class="iconfont icon-zhifeiji"></p>
      <p>一面而就</p>
      <p>··</p>
    </div>
    <div class="boxMain">
      <div class="boxText">
        <p>线下面试通知</p>
        <p>7月4日 8:28</p>
      </div>
      <div class="boxFont">
        <div>
          <p>公司名称</p>
          <p>老马识途</p>
        </div>
        <div>
          <p>联系人</p>
          <p>12345465655</p>
        </div>

        <div>
          <p>公司名称</p>
          <p>老马识途</p>
        </div>
        <div>
          <p>公司名称</p>
          <p>老马识途</p>
        </div>
        <div>
          <p>公司名称</p>
          <p>老马识途</p>
        </div>
      </div>
    </div>
    <div class="boxBottom">
      <p>进入小程序</p>
      <p>></p>
    </div>
    <div class="boxBottom">
      <p @click="to">进入小程序</p>
      <p>></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //传入组件
  components: {},

  methods: {
    to() {
      wx.navigateTo({
        url: "/pages/interviewList/main"
      });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>
<style scoped lang="scss">
.serveBox {
  width: 93%;
  background: #ffff;
  margin: 0 auto;
  height: 600rpx;
  border-radius: 8rpx;
  .boxTop {
    display: flex;
    width: 92%;
    margin: 0 auto;
    height: 100rpx;
    line-height: 100rpx;
    align-items: center;
    p:nth-child(2) {
      flex: 1;
      text-indent: 8rpx;
    }
  }
}
.boxMain {
  flex: 1;
  border-top: 1px solid #ccc;
}
.boxBottom {
  height: 62rpx;
  line-height: 62rpx;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  font-size: 32rpx;
  p:nth-child(1) {
    margin-left: 25rpx;
  }
  p:nth-child(2) {
    margin-right: 25rpx;
  }
}
.boxText {
  p {
    margin: 0 auto;
    width: 93%;
  }
  p:nth-child(1) {
    font-size: 34rpx;
    padding: 10rpx 0;
  }
  p:nth-child(2) {
    font-size: 26rpx;
    color: #ccc;
  }
}
.boxFont {
  margin-top: 30rpx;
  height: 240rpx;
  div {
    margin-top: 20rpx;
    margin: 0 auto;
    width: 93%;
    display: flex;
    font-size: 30rpx;
    padding: 3rpx;
    p:nth-child(1) {
      width: 130rpx;
      color: rgb(177, 177, 177);
    }
    p:nth-child(2) {
      margin-left: 20rpx;
    }
  }
}
.iconfont {
  font-size: 50rpx;
  padding: 10rpx;
}
</style>
