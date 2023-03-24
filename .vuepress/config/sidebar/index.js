//侧边栏
module.exports = {
  '/docs/': [
    {
      title: 'HTML5',
      collapsable: true,
      children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
    },
    {
      title: 'CSS',
      collapsable: true,
      children: ['css/css3新特性', 'css/css3Flip']
    },
    {
      title: 'JS',
      collapsable: true,
      children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
    },
    {
      title: 'Vue.js',
      collapsable: true,
      children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
    },
    {
      title: '前端单元测试',
      collapsable: true,
      children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
    },
    {
      title: '微信小程序',
      collapsable: true,
      children: ['wechat-mini-program/初识微信小程序']
    }
  ],
  '/blogs/qaq/': [
    {
      title: '知识晶体 Q&A',
      collapsable: true,
      children: [
        'sum_fe_001',
        'sum_fe_002',
        'sum_java_001',
        'sum_java_002',
        'sum_db_001',
        'sum_spring_001',
        'sum_spring_002',
        'sum_spring_003',
        'sum_ms_001',
      ]
    }
  ],
  '/blogs/specification/': [
    {
      title: '规范 Standard',
      collapsable: true,
      children: [
        'ali',
        'git',
        'linux01',
        'linux02',
        'objectModel',
        '提交规范',
        'javaNamingConvention',
        'k8s基本命令与pod管理',
      ]
    }
  ],
  '/blogs/frontend/': [
    {
      title: '前端 Front-end',
      collapsable: true,
      children: [
        'EChartsStudy',
        'js-json',
        'viaStart',
        'vue-demo',
        'reco-info',
        'vuepress-plugin-boxx',
        'TCP&UDP',
      ]
    }
  ],
  '/blogs/backend/': [
    {
      title: '后端 Back-end',
      collapsable: true,
      children: [
        'spring-source-01',
        'ArrayList',
        'HashMap',
        'docker',
        'itext',
        'poi',
        'quartz',
        '单元测试1',
        '单元测试2',
        '单元测试3',
        'rabbitmq001',
        'rabbitmq002',
        'redis01',
        'redis02',
        'redis使用场景',
        'SSH',
        'jwt',
        'swagger2',
        'thread',
        'ThreadLocal',
        'ThreadPool',
        'ThreadPool2',
        'annotationLog',
        'jvm',
        'JUC',
        'javaLock',
        'mysql_explain',
        'mybatis一二级缓存',
        'ReentrantLock',
        'CountDownLatch',
        'zookeeper',
        '分布式系统概述',
        'API网关概述',
        'spring-security-01',
        'spring-security-02',
        'SchedulingConfigurer',
        'ThreadTopCPU',
        'OOM分类及排查',
        'EasyExcel',
        'java_io模型',
        'SPI_JdkDubboSpring',
        'spring_application_json',
        'springboot配置文件加载顺序',
        '动态代理和静态代理区别',
        'zk选举和一致性',
        '超时取消分析',
        'mini-ioc',
        'Spring的IOC源码以及流程分析',
      ]
    }
  ]
}
