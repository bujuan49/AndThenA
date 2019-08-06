<template>
  <div class="designWrap">
    <div>
      <p>面试地址:</p>
      <span class="designText">北京世海淀区西北旺东路中关村软件园二号西区七号</span>
    </div>
    <div>
      <p>面试时间:</p>
      <p>2019-07-05 22:00</p>
    </div>
    <div>
      <p>联系方式:</p>
      <p>17611790602</p>
    </div>
    <div>
      <p>是否提醒:</p>
      <p>未提醒</p>
    </div>
    <div>
      <p>面试状态:</p>
      <p>以打卡</p>
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
.designWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    border-top: 1px solid #ccc;
  }
  div {
    height: 100rpx;
    border-bottom: 1px solid #cccccc;
    display: flex;
    p:nth-child(1) {
      width: 20%;
      padding: 0 15rpx;
      font-size: 28rpx;
      line-height: 100rpx;
    }
    p:nth-child(2) {
      flex: 1;
      font-size: 28rpx;
      line-height: 60rpx;
      padding: 20rpx 0;
    }
  }
}
.designText {
  flex: 1;
  font-size: 28rpx;
  padding: 20rpx 10px 0 0;
}
</style>
