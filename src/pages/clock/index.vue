<template>
  <div class="clockWrap">
    <div>
      <p>面试地址:</p>
      <span class="clockText">北京世海淀区西北旺东路中关村软件园二号西区七号</span>
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
    <div>
      <p>取消提醒:</p>
      <p>
        <switch @change="switch2Change" />
      </p>
    </div>
    <div>
      <button>去打卡</button>
      <button>放弃面试</button>
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
    switch2Change: function(e) {
      //按钮改变事件
      console.log("switch2 发生 change 事件，携带值为");
    }
  }
};
</script>
<style scoped lang="scss">
.clockWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    border-top: 1px solid #ccc;
  }
  div:last-child {
    border: none;
    display: flex;
    justify-content: space-between;
    button {
      width: 45%;
    }
    button:nth-child(1) {
      background: rgb(25, 125, 191);
    }
    button:nth-child(2) {
      background: rgb(220, 78, 66);
    }
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
.clockText {
  flex: 1;
  font-size: 28rpx;
  padding: 20rpx 10px 0 0;
}
</style>
