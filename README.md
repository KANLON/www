# 个人的主页网站

目前暂时用于做自己的首页，列举了一些自己的搭建的相关系统  [www.kanlon.top](http://www.kanlon.top)


## 部署安装

需要安装 nodejs 和 yarn

安装完之后分别运行 `yarn install` 和 `yarn build` 就可以在当前目录的`dist`目录下获取到静态文件，将该文件作为nginx配置的root目录即可访问


如果要开发，可以运行 yarn install 后 ，运行 `yarn serve`，即可修改源码立即展示，默认启动在8080端口


要增加系统，需要在 `src/config.js` 文件中添加如下格式的json数据


```js
[
  {
    pageId: 1,
    sortId: 1,
    title: "datart系统",
    subtitle: "可视化系统",
    url: "http://datart.kanlon.ink",
    icon: "https://camo.githubusercontent.com/bbf4ef79f20364bbf1181ca8ef4d5038781f1c2fefb202af2e8f377bcf6bb3cd/68747470733a2f2f72756e6e696e672d656c657068616e742e6769746875622e696f2f6461746172742d646f63732f696d616765732f61626f75742f6c6f676f5f776974685f746578742e6a7067"
  },
  {
    pageId: 2,
    sortId: 1,
    title: "cfile服务",
    subtitle: "文件上传管理服务",
    url: "http://cfile.kanlon.ink",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 1,
    title: "xxl-job调度管理系统",
    subtitle: "分布式任务调度平台xxl-job",
    url: "http://xxl-job.kanlon.ink",
    icon: "https://www.xuxueli.com/doc/static/xxl-job/images/xxl-logo.jpg"
  },
  {
    pageId: 4,
    sortId: 1,
    title: "lepus数据库监控系统",
    subtitle: "lepus开源企业级数据库监控系统",
    url: "http://lepus.kanlon.ink",
    icon: "https://www.xuxueli.com/doc/static/xxl-job/images/xxl-logo.jpg"
  }

]
```
clone 自 Blog-Index 通用网站导航 https://github.com/EsunR/Blog-Index




