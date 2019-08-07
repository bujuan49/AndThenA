<template>
  <div>
    <div class="interviewMainBox" v-for="item in listAll" :key="item.id">
      <div class="boxListOne">
        <p>{{listAll}}</p>
        <p class="okCall end">已打卡</p>
      </div>
      <div class="boxListTwo">
        <p>北京市海淀区上地十街10号</p>
        <p></p>
      </div>
      <div class="boxListThree">
        <p>
          面试时间:2019-07-04
          <span>21:00</span>
        </p>
        <p class="okCall no" @click="to">未提醒</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listAll: Object
  },
  data() {
    return {};
  },
  //传入组件
  components: {},

  methods: {
    to() {
      wx.navigateTo({
        url: "/pages/personal/main"
      });
    }
  },

  created() {
    console.log();
  }
};
</script>
<style scoped lang="scss">
.interviewMainBox {
  flex-shrink: 0;
  height: 260rpx;
  background: #fff;
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;
  div {
    width: 92%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  div:nth-child(1) {
    height: 40%;
    p:nth-child(1) {
      font-size: 42rpx;
      width: 80%;
    }
  }
  div:nth-child(2) {
    font-size: 32rpx;
    flex: 1;
    color: rgb(153, 153, 153);
  }
  div:nth-child(3) {
    height: 35%;
    p:nth-child(1) {
      width: 80%;
    }
  }
}
.okCall {
  flex: 1;
  text-align: center;
  line-height: 50rpx;
  font-size: 30rpx;
  padding: 0 12rpx;
  height: 50rpx;
}
.end {
  color: rgb(64, 185, 255);
  background: rgb(236, 245, 255);
}
.no {
  color: rgb(144, 157, 153);
  background: rgb(244, 244, 245);
}
</style>
