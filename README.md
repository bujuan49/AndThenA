# 前言

[README in English](README-en.md)
一个打卡小程序,您在添加完面试之后可以提前一个小时通知您，并获取地理位置，如果您的位置在预定地址1公里内可打卡。

## 技术栈

  主要是运用了小程序中的API与mpvue,腾讯地图,生物认证,获取权限,eslint语法规范。

## 项目运行


```
git clone https://github.com/bujuan49/AndThenA.git

npm install -S


```
## 关于接口数据

此项目的所有接口数据都来源于配套的后台系统，

如果想体验前后台同时开发，可以下载后台系统。

此时启动本项目的命令为：npm run dev。


# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ~~
   
   如果您有什么宝贵的意见也可以交给小弟 1041355591@qq.com 或者把您的代码pll request 一下。

>  推荐一个大神，对全栈感兴趣的朋友赶紧去看看。通过加我的QQ1041355591给你反馈大神群。

>  另外如果您想彻底了解本项目  请认真浏览  mpvue 官网:http://mpvue.com/
                                        小程序官网:https://developers.weixin.qq.com/miniprogram/dev/framework/
                                        与vue的语法！


# 截图展示
![Image text](https://github.com/bujuan49/AndThenA/blob/gz/static/images/1.png)![Image text](https://github.com/bujuan49/AndThenA/blob/gz/static/images/2.png)  
![Image text](https://github.com/bujuan49/AndThenA/blob/gz/static/images/3.png)![Image text](https://github.com/bujuan49/AndThenA/blob/gz/static/images/4.png)   
![Image text](https://github.com/bujuan49/AndThenA/blob/gz/static/images/5.png)


# 目标功能
- [x] 添加面试 -- 完成
- [x] 定位 -- 完成
- [X] 选择地址 -- 完成
- [x] 切换页面 -- 完成
- [x] 详情页-- 完成
- [x] 详情页改变状态 -- 完成
- [x] 手机号授权 -- 完成
- [x] 放弃面试 -- 完成
- [ ] 模板推送 -- 未完成
- [ ] 打卡 -- 未完成




# 总结

1、这次的小程序让我们受益匪浅
2、遇到的bug
    1.肯定是401了,未授权，但是id传了post里面测试通过为什么？参数多加了一个花括号。
    2.状态改变页面没有马上刷新，而且切出去刷新数据重新改变了。
    3.tab切换的地方为了方便我使用了一个数据，但是最后还是脱离不了俩数据的判断。
    4.都是string没办法判断。暴露了js方法不熟练。
    5.有一个不用调用接口可以获取到数据，我就没有用接口，结果是返工，重新调用接口，
    6.tab切换那个地方没有考虑周全应该传的时候就传参数，不应该去到后面判断。
    7.在这里面好像不支持{{}}里面函数的rerun。

# 最终目标

1、小程序还是不够完善，模板推送和打卡有点严重的问题，客户体验也有问题，改正到客户体验度很高并且
完美无bug。

。。。敬请期待




