const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "我的博客"; // 个人网站名字

const BLOG_URL = "http://blog.csdn.net/weixin_37610397"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/kanlon"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "相关网站" }
  // ,{ sortId: 2, title: "示例分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "粤ICP备17134626号-1"; // 网站备案号，留空不显示

const PAGES_DATA = [
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
    icon: "http://www.lepus.cc/wp-content/themes/kaikela/assets/img/tmp/logo-colored.png"
  },
  {
    pageId: 5,
    sortId: 1,
    title: "zfile文件管理系统",
    subtitle: "基于 Java 的在线网盘程序",
    url: "http://zfile.kanlon.ink",
    icon: "https://www.zfile.vip/assets/zfile-horizontal.abd5aec9.svg"
  },
  {
    pageId: 6,
    sortId: 1,
    title: "superset系统",
    subtitle: "现代数据探索和可视化平台",
    url: "http://superset.kanlon.ink",
    icon: "https://superset.apache.org/img/superset-logo-horiz.svg"
  }

]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
