<template>
  <div>
    <div class="interviewMainBox" v-for="item in listAll" :key="item.id" @click="to(item)">
      <div class="boxListOne">
        <p>{{item.company}}</p>
        <p :class="item.remind===-1?'okCall no':'okCall end'">{{item.remind===-1 ? '未开始': '已打卡'}}</p>
      </div>
      <div class="boxListTwo">
        <p>{{item.address}}</p>
      </div>
      <div class="boxListThree">
        <p>
          面试时间:{{item.start_time}}
          <span></span>
        </p>
        <p class="okCall no">未提醒</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    to(item) {
      wx.navigateTo({
        url: "/pages/clock/main?id=" + item.id
      });
    }
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
