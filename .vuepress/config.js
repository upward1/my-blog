const plugins = require('./config/plugins')
const sidebar = require('./config/sidebar/')
module.exports = {
  title: '知识库',
  description: '路漫漫其修远兮，吾将上下而求索',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['meta', { name: 'keywords', content: '知识库, 个人博客' }],
    [
      'meta',
      {
        name: 'description',
        content: '往日暗沉不可追，来日之路光明灿烂。欢迎搜索我的博客，这里应该有您想要的东西，来和我一起交流学习吧！'
      }
    ],
    ['meta', { name: 'author', content: '小陈同学' }],
    ['meta', { name: 'robots', content: 'all' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#e7eaed' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#e7eaed'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/utils/js/MouseClickEffect.js'
      }
    ]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '笔记', link: '/docs/', icon: 'reco-document' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' }
    ],
    sidebar,
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    friendLink: [
      {
        title: '图书推荐系统',
        desc: '一个知识积累的地方。',
        logo: 'https://kaixin1.top/assets/book.jpg',
        link: 'http://kaixin1.top:3005/'
      },
      {
        title: '3D相册',
        desc: '炫酷的相册展示。',
        logo: 'https://kaixin1.top/assets/picture.jpg',
        link: 'http://kaixin1.top:3001/'
      }
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    author: '小陈同学',
    authorAvatar: '/avatar.png',
    // record: '豫ICP备2021022451号-1',
    // recordLink: 'https://beian.miit.gov.cn/',
    startYear: '2017',
    //git地址
    repo: 'upward1/my-blog',
    // 如果你的文档不在仓库的根部
    // docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    //评论
    valineConfig: {
      appId: 'v2aZJC7xUKZ3zSP8UJWE1MCW-gzGzoHsz',
      appKey: 'G3rqbDY8Q22ZP8CcXTrxPtwX',
      placeholder: '来都来了，冒个泡再走呗...',
      recordIP: true, // 是否记录评论者IP
      avatar: 'wavatar'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins
}
