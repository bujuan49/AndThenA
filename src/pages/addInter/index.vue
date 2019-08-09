<template>
  <div class="addInterWrap">
    <div class="addInterHead">
      <div>北京</div>
      <input type="text" @input="(e)=>chengeFn(e)" v-model="value"/>
    </div>
    <div class="addInterMain">
      <div v-for="item in addresslist" :key="item.id" @click="toInter(item)">
        <p class="iconfont icon-zhifeiji"></p>
        <p>
          <span>{{item.title}}</span>
          <span>{{item.address}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  data() {
    return {
      value:""
    };
  },
  //传入组件
  computed: {//计算属性
    ...mapState({
      addresslist:state => state.address.addresslist
    })
  },
  methods: {//定义函数
      ...mapActions({
        getSuggestion:'address/getSuggestion'
      }),
      chengeFn(e){
        this.value=e.mp.detail.value
        this.getSuggestion(this.value);
      },
      toInter(str){
        console.log("str...",str)
        wx.navigateTo({url:"/pages/interview/main?str="+ JSON.stringify(str)})
      }
  },
  mounted() {
    console.log(this)
    this.getSuggestion(this.value);
  }, 
  created() {
    // let app = getApp()
  }
};
</script>

<style scoped lang="scss">
.addInterWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .addInterHead {
    border: 1rpx solid #ccc;
    height: 80rpx;
    display: flex;
    align-items: center;
    div {
      text-align: center;
      height: 100%;
      line-height: 80rpx;
      width: 80rpx;
      padding: 0 50rpx;
    }
    input {
      flex: 1;
      border-left: 1px solid #ccc;
      text-indent: 6rpx;
      padding-left: 8rpx;
    }
  }
}
.addInterMain {
  flex: 1;
  & > div {
    display: flex;
    border-bottom: 1px solid #ccc;
    p:nth-child(1) {
      width: 20%;
      text-align: center;
      line-height: 80rpx;
      font-size: 60rpx;
      color: skyblue;
    }
    p:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;
      span:nth-child(1) {
        padding: 10rpx 0 0 0;
        font-size: 33rpx;
      }
      span:nth-child(2) {
        color: rgb(199, 211, 203);
        font-size: 28rpx;
      }
    }
  }
}
</style>
