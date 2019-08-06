<template>
  <div class="interviewListWrap">
    <ul class="interviewListHeader">
      <li class="active">未开始</li>
      <li>已打卡</li>
      <li>以放弃</li>
      <li>全部</li>
    </ul>
    <div class="interviewMain">
      <div class="interviewMainBox"></div>
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
.interviewListWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
}
.interviewListHeader {
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  li {
    text-align: center;
    padding: 15rpx 0;
  }
}
.interviewMain {
  flex: 1;
  display: flex;
  flex-direction: column;
  .interviewMainBox {
    height:260rpx;
    background: #fff;
    margin-top: 16rpx;
  }
}
.active {
  color: rgb(39, 133, 195);
  border-bottom: 1px solid rgb(39, 133, 195);
}
</style>
