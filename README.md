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
- [x] 登录、注册 -- 未完成
- [x] 首页渲染 -- 完成
- [X] 路由 -- 完成
- [x] 分类详情页 -- 完成
- [x]  分类详情页-- 未完成
- [x] 购物车 -- 未完成
- [x] 增加地址 -- 未完成
- [x] 模糊搜索 -- 未完成
- [x] loading -- 未完成
- [ ] 点击完成购物车功能 -- 未完成
- [x] 首页子页面 -- 未完成




# 总结

1、可以说是第一次写一个项目，有很多地方需要改进。
2、写完项目明确的目录结构
    1.api下放所有的接口,便于总结和日后的修改,
    2.component下放全局的组件并在main.js下使用component用。
    3.router下放所有的路由也是为了方便统一管理
    4.static放置所有的静态资源的地方
    5.store放置的是react，也是仓库方便组件之间的传值。
    6.utils这个目录里面放置的是工具，统一放置统一管理。
    7.views放置的是所有的页面。
    8.plugins放置所有的插件
    9.directives放置的是所有自定义指令


# 最终目标

1、用react构建一个完整的网易严选

。。。敬请期待




