<template>
  <div class="serveBox">
    <div class="boxTop">
      <p>一面而就</p>
      <p>·</p>
    </div>
    <div class="boxMain">
      <div class="boxText">
        <p>线下面试通知</p>
        <p>7月4日 8:28</p>
      </div>
      <div class="boxFont">
        <p>公司名称</p>
        <p>老马识途</p>
      </div>
    </div>
    <div class="boxBottom">
      <p>进入小程序</p>
      <p>></p>
    </div>
    <div class="boxBottom">
      <p>进入小程序</p>
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

  methods: {},

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
    justify-content: space-between;
    margin: 0 auto;
    height: 100rpx;
    line-height: 100rpx;
  }
}
.boxMain {
  flex: 1;

  border-top: 1px solid #ccc;
}
.boxBottom {
  height: 80rpx;
  line-height: 80rpx;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-top: 1px solid #ccc;
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
  margin: 0 auto;
  width: 93%;
}
</style>
