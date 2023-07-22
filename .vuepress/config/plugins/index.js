const path = require('path')
module.exports = {
  // 默认随机展示名人名句
  'vuepress-plugin-boxx': {},
  // 滚动条
  'vuepress-plugin-smooth-scroll': {},
  //一键复制代码
  'vuepress-plugin-code-copy': {},
  // 页面切换进度条
  '@vuepress/nprogress': {},
  // 阅读进度条
  'reading-progress': {},
  // 吊着的小猫
  'go-top': {},
  // 百度推送
  'vuepress-plugin-baidu-autopush': {},
  // 可以禁用文字复制或者在复制时添加著作权信息
  copyright: {
    // noCopy: true, // 选中的文字将无法被复制
    minLength: 30, // 如果长度超过 30 个字符
    clipboardComponent: path.resolve(__dirname, '../../components/Copyright.vue')
  },
  // 点击泡泡
  'cursor-effects': {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999 // z-index property of the canvas, default: 999999999
  },
  'dynamic-title': {
    showIcon: '/favicon.ico',
    showText: '(/≧▽≦/)欢迎回来！',
    hideIcon: '/favicon.ico',
    hideText: '(●—●)哦吼,不要走,给个收藏吧！',
    recoverTime: 2000
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      '/': {
        message: 'New content is available.',
        buttonText: 'Refresh'
      },
      '/zh/': {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }
  },
  // 樱花特效
  sakura: {
    num: 20, // 默认数量
    show: true, //  是否显示
    zIndex: 9999, // 层级
    img: {
      replace: false, // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...' // 绝对路径
    }
  },
  // 背景特别多线
  nest: {
    // 更多配置项以及配置项说明上 https://github.com/vxhly/vuepress-plugin-nest 查看
    color: '50,139,98', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    // pointColor: '255,0,255', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    opacity: 0.7, // the opacity of line (0~1), default: 0.5.
    count: 300, // the number of lines, default: 99.
    zIndex: -1, // z-index property of the background, default: -1.
    showInMobile: false // whether to display on the mobile side, default: false.
  },
  // 丝带效果
  'ribbon-animation': {
    size: 90, // 默认数据
    opacity: 0.3, // 透明度
    zIndex: -2, // 层级
    opt: {
      // 色带HSL饱和度
      colorSaturation: '80%',
      // 色带HSL亮度量
      colorBrightness: '60%',
      // 带状颜色不透明度
      colorAlpha: 0.65,
      // 在HSL颜色空间中循环显示颜色的速度有多快
      colorCycleSpeed: 6,
      // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      verticalPosition: 'center',
      // 到达屏幕另一侧的速度有多快
      horizontalSpeed: 200,
      // 在任何给定时间，屏幕上会保留多少条带
      ribbonCount: 2,
      // 添加笔划以及色带填充颜色
      strokeSize: 0,
      // 通过页面滚动上的因子垂直移动色带
      parallaxAmount: -0.5,
      // 随着时间的推移，为每个功能区添加动画效果
      animateSections: true
    },
    ribbonShow: false, // 点击彩带 true显示 false为不显示
    ribbonAnimationShow: true // 滑动彩带
  },
  // 背景音乐
  '@vuepress-reco/vuepress-plugin-bgm-player': {
    audios: [
      {
        name: '此生不换',
        artist: '青鸟飞鱼',
        url: 'https://kaixin1.top/assets/music/此生不换.mp3',
        cover: 'https://kaixin1.top/assets/music/此生不换.jpg'
      },
      {
        name: 'PDD洪荒之力',
        artist: '青稚m',
        url: 'https://kaixin1.top/assets/music/PDD洪荒之力.mp3',
        cover: 'https://kaixin1.top/assets/music/PDD洪荒之力.jpg'
      },
      {
        name: '海底',
        artist: '凤凰传奇',
        url: 'https://kaixin1.top/assets/music/海底.mp3',
        cover: 'https://kaixin1.top/assets/music/海底.jpg'
      },
      {
        name: 'Wake',
        artist: 'Hillsong Young & Free',
        url: 'https://kaixin1.top/assets/music/wake.mp3',
        cover: 'https://kaixin1.top/assets/music/wake.jpg'
      },
      {
        name: '琵琶行',
        artist: '奇然/沈谧仁',
        url: 'https://kaixin1.top/assets/music/琵琶行.mp3',
        cover: 'https://kaixin1.top/assets/music/琵琶行.jpg'
      }
    ],
    // 是否默认缩小
    autoShrink: true,
    // 缩小时缩为哪种模式
    shrinkMode: 'float',
    // 指定浮窗模式浮动在哪一侧
    floatPosition: 'left', //'left'/'right'
    // 悬浮窗样式
    floatStyle: { bottom: '50px', 'z-index': '999999' },
    position: { left: '10px', bottom: '10px', 'z-index': '999999' }
  },
  // 看板娘2
  'vuepress-plugin-helper-live2d': {
    // 是否开启控制台日志打印(default: false)
    log: false,
    live2d: {
      // 是否启用(关闭请设置为false)(default: true)
      enable: true,
      // 模型名称(default: hibiki)
      model: 'tororo', // koharu,hibiki,z16,miku,tororo
      display: {
        position: 'left', // 显示位置：left/right(default: 'right')
        width: 135, // 模型的长度(default: 135)
        height: 300, // 模型的高度(default: 300)
        hOffset: 100, //  水平偏移(default: 65)
        vOffset: 30 //  垂直偏移(default: 0)
      },
      mobile: {
        show: false // 是否在移动设备上显示(default: false)
      },
      react: {
        opacity: 1 // 模型透明度(default: 0.8)
      }
    }
  }
}
