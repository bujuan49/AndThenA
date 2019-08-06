<template>
  <div class="homewrap">
    <div class="content">
      <div class="title">添加面试</div>
      <div class="inp_box">
        <span>公司名称</span>
        <input type="text" placeholder="请输入公司名称">
      </div>
       <div class="inp_box">
         <span>公司电话</span>
        <input type="text" placeholder="请输入面试联系人电话">
      </div>
       <div class="inp_box">
        <span>面试时间</span>
        <picker mode="date" :value="date" start="2015-09-01" end="2019-10-01" @change="bindDateChange">
            <view class="picker">
              2019-8-6 {{date}}
            </view>
        </picker>
      </div>
       <div class="inp_box">
        <span>面试地址</span>
        <input type="text" placeholder="请选择面试地址" @click="()=>this.$router.push({path:"/"})">
      </div>
      <div class="title">备注信息</div>
      <div class="text_box">
        <textarea name="" id="textarea" cols="10" rows="50" placeholder="备注信息(可选,100个字以内)"></textarea>
      </div>
      <div class="footer">确认</div>
    </div>
  </div>
</template>

<script>
export default {
   data () {
    return {
      index: 0,
      array: ['A', 'B', 'C']
    }
  },

  components: {
   
  },

   methods: {
    bindPickerChange (e) {
      console.log(e)
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
*{
  margin:0;
  padding: 0;
}
.homewrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    width: 100%;
    flex:1;
    .title{
      width: 100%;
      height: 80rpx;
      background: #E5E5E5;
      display: flex;
      align-items: center;
      padding: 0 10rpx;
    }
    .inp_box{
      width: 100%;
      height: 100rpx;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      span{
        margin: 0 10rpx;
      }
    }
    .text_box{
      padding: 30rpx;
    }
    #textarea{
      border:2rpx solid #ccc;
    }
  }
  .footer{
    width: 100%;
    height: 100rpx;
    background:#666;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
  }
}
</style>
