<template>
  <div class="personalWrap">
    <div class="personalHead">
      <div class="iconfont icon-touxiang"></div>
      <div>159******7149</div>
    </div>
    <div class="personalMain">
      <div>
        <p class="iconfont icon-shijian"></p>
        <p>我的面试</p>
        <p>></p>
      </div>
      <div>
        <p class="iconfont icon-shijian"></p>
        <p>我的面试</p>
        <p>></p>
      </div>
      <div>
        <p class="iconfont icon-shijian"></p>
        <p>我的面试</p>
        <p>></p>
      </div>
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

  methods: {}
};
</script>

<style scoped lang="scss">
.personalWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .personalHead {
    background: rgb(244, 246, 249);
    height: 30%;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      height: 70%;
      text-align: center;
      line-height: 300rpx;
      font-size: 120rpx;
    }
    div:nth-child(2) {
      text-align: center;
    }
  }
}
.personalMain {
  display: flex;
  flex-direction: column;
  div {
    height: 100rpx;
    display: flex;
    line-height: 100rpx;
    border-bottom: 1px solid #ccc;
    p:nth-child(1) {
      font-size: 50rpx;
      color: skyblue;
      padding: 0 30rpx;
    }
    p:nth-child(2) {
      flex: 1;
      font-size: 34rpx;
    }
    p:nth-child(3) {
      width: 10%;
    }
  }
}
</style>
