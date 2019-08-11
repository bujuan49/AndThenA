<template>
  <div class="homewrap">
    <div class="content">
      <div class="title">添加面试</div>
      <form @submit="formSubmit" report-submit>
        <div class="inp_box">
          <label>公司名称</label>
          <input  type="text" name="name" placeholder="请输入公司名称" v-model="current.company">
        </div>
        <div class="inp_box">
          <label>公司电话</label>
          <input  type="text" name="tel" placeholder="请输入面试联系人电话" v-model="current.phone">
        </div>
        <div class="inp_box">
          <label>面试时间</label>
            <picker
              mode="multiSelector"
              :range="formatTime"
              :value="info.date"
              @change="dateChange"
              @columnchange="columnChange"
            ><view class="date">{{dateShow}}</view>
          </picker>
        </div>
        <div class="inp_box">
          <label>面试地址</label>
          <navigator url="/pages/addInter/main"><input name="address" type="text" v-model="intervalue" placeholder="请选择面试地址"></navigator>
        </div>
        <div class="title">备注信息</div>
        <div class="text_box">
          <textarea name="text" id="textarea" cols="10" rows="50" placeholder="备注信息(可选,100个字以内)" 
          v-model="current.description" ></textarea>
        </div>
        <button class="footer" report-submit="true" form-type="submit">确认</button>
      </form>
      
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
const moment =require("moment");
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
   data () {
    return {
      info:{date:[0,0,0]},
      company_name:"",
      company_tel:"",
      intervalue:"",
      textarea:"",
      longitude:"",//经度
      latitude:"",//纬度
      form_id:""
    }
  },
  onLoad:function(options){
    this.intervalue=JSON.parse(options.str).title
    this.longitude=JSON.parse(options.str).location.lng
    this.latitude=JSON.parse(options.str).location.lat
    console.log(JSON.parse(options.str))
  },
  components: {
   
  },
  computed: {
    ...mapState({
      current:state=>state.addInterview.current
    }),
    formatTime(){
      let dateRange=[...range];
      if(!this.info.date[0]){
        dateRange[1]=dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        dateRange[1]=range[1]
      }

      //格式化小时
      dateRange[1]=dateRange[1].map(item=>{
        return item+'点'
      })
      //计算当前日期之后的天
      dateRange[0]=dateRange[0].map(item=>{
        return moment().add(item,'days').date()+'号'
      })
      return dateRange;
      
    },
    
    dateShow(){
      return moment()
      .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0],'d')
      .add(this.info.date[1]+1,'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    },
  },
  methods: {
    ...mapActions({
      submitInterview:'addInterview/submit'
    }),
    
   columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    bindPickerChange (e) {
        this.date= e.mp.detail.value;
    },
    bindChangeTime(e){
        this.time=e.mp.detail.value;
    },
    //提交添加面试
   
    async formSubmit (e) {
      // 判断公司名称是否为空
      if (!this.current.company){
        wx.showToast({
          title: '请输入公司名称', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
      // 判断手机号是否符合规范
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)){
        wx.showToast({
          title: '请输入面试联系人的手机或座机', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
      // 判断公司地址
      if (!this.intervalue){
        wx.showToast({
          title: '请选择公司地址', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
      this.current.company=e.mp.detail.value.name;
      this.current.phone=e.mp.detail.value.tel;
      this.current.address=this.intervalue;
      this.current.description=e.mp.detail.value.text;
      this.current.form_id = e.target.formId;
      this.current.latitude=this.latitude;
      this.current.longitude=this.longitude,
      this.form_id=e.mp.detail.formId
      //添加时间戳
      this.current.start_time = moment(this.dateShow).unix()*1000;
      this.submiting = true;
      let data = await this.submitInterview(this.current);
      if(data.code==0){
        console.log(111)
        wx.showModal({
          title: '温馨提示', //提示的标题,
          content: data.msg, //提示的内容,
          showCancel: false,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#197DBF', //确定按钮的文字颜色,
          success: res => {
            if (res.confirm) {
              this.company_name="",
              this.company_tel="",
              this.textarea="",
              this.form_id="",
              wx.navigateTo({ url: "/pages/interviewList/main" });
            }
          }
        });
      }else{
        console.log(222)
      }
    },
  },

  created () {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
    wx.setNavigationBarTitle({
      title: '添加面试' 
    })
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
      p{
        display: flex;
        align-items: center;
      }
      span{
        margin: 0 10rpx;
      }
      label{
        margin:0 10rpx;
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
    background: none;
    background:#666;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    outline: none;
  }
}
</style>
