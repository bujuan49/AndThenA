<template>
  <div class="personalWrap">
    <div class="personalHead">
      <div class="iconfont icon-touxiang"></div>
      <div>**********</div>
    </div>
    <div class="personalMain">
      <div>
        <p class="iconfont icon-shijian"></p>
        <p @click="to">我的面试</p>
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
    <div class="z_Modal">
      <div class="z_content">
        <p>为了更好的使用我们的服务,我们需要获取你的手机号</p>
        <div class="z_btn">
          <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // wx.showModal({
    //     title: '提示',
    //     content: '为了更好的使用我们的服务,我们需要获取你的手机号',
    //     showCancel:false,
    //     success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    //注意
  },
  //传入组件
  components: {},

  methods: {
    to() {
      wx.navigateTo({
        url: "/pages/addInter/main"
      });
    },
    getPhoneNumber (e) {
      console.log("0000000",e)
      // console.log(e, "phone");
      // console.log(e.detail.iv)
      // console.log(e.detail.encryptedData)
    }
  }
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
.z_Modal{
  width: 100%;
  height: 100%;
  background: rgba(150,150,150,0.5);
  position: fixed;
  top:0;
  left:0;
  .z_content{
    width: 500rpx;
    height: 240rpx;
    background: #fff;
    margin: 55% auto;
    border-radius: 20rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    p{
      height: 160rpx;
      padding: 10rpx 15rpx;
      font-size: 16px;
    }
    .z_btn{
      width:100%;
      flex:1;
      border-top:1px solid #ccc;
      background: #328FFE;
      button{
        width: 100%;
        height: 100%;
        outline: none;
        background: none;
        border:0;
        background: #328FFE;
        color:#fff;
         font-size: 18px;
      }
    }
  }
  
}
</style>
