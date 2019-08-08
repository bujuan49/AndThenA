<template>
  <div class="clockWrap">
    <div>
      <p>面试地址:</p>
      <span class="clockText">{{detail.address}}</span>
    </div>
    <div>
      <p>面试时间:</p>
      <!-- <p>{{start_time}} 22:00</p> -->
    </div>
    <div>
      <p>联系方式:</p>
      <p>{{detail.phone}}</p>
    </div>
    <div>
      <p>是否提醒:</p>
      <p>{{detail.remind=== 1?'已提醒':'未提醒'}}</p>
    </div>
    <div>
      <p>面试状态:</p>
      <p>{{detail.status=== 1?"已放弃":detail.status=== -1 ?'未开始': '已打卡'}}</p>
    </div>
    <div>
      <p>取消提醒:</p>
      <p>
        <switch @change="switch2Change(detail.remind)" />
      </p>
    </div>
    <div>
      <button>打卡</button>
      <button>放弃面试</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      //一整个数据
      address: null,
      //地址详细数据
      //时间
      start_time: null
    };
  },
  //传入组件
  components: {},
  computed: {
    ...mapState({
      detail: state => state.interviewList.typeAll
    })
  },
  methods: {
    ...mapActions({
      changeSign: "interviewList/changeSign",
      details: "interviewList/details"
    }),
    switch2Change: function(e) {
      console.log("这是状态 1", e);
      if (e === 1) {
        this.changeSign({
          id: this.detail.id,
          remind: 0
        });
        this.details(this.detail.id);
      } else {
        this.changeSign({
          id: this.detail.id,
          remind: 1
        });
        this.details(this.detail.id);
      }
      //按钮改变事件
      // this.changeSign({
      //   id: this.address.id,
      //   remind: e
      // });
    }
  },
  onLoad: function(options) {
    this.details(options.id);
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
