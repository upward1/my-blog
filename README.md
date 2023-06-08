---
home: true
heroText: '时刻充满希望'
bgImage: '/home_bg.jpg'
bgImageStyle: {
  height: '100vh',
  minHeight: '600px',
  margin: 0
}
isShowTitleInHome: true
---
<NewFont />
<!-- <PaoPao /> -->

<script>
export default {
  data() {
    return {
      windowH: 0,
      navbar: null
    }
  },
  mounted() {
    const ifJanchor = document.getElementById('JanchorDown'); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.querySelector('.hero').append(a);
    let targetA = document.getElementById('JanchorDown');
    this.windowH = document.querySelector('.hero').clientHeight;
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })

    this.navbar = document.querySelector('.navbar');
    this.navbar && this.navbar.classList.add('custom-navbar');
    document.addEventListener('scroll', this.homeNavbarHandle)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.homeNavbarHandle)
  },
  methods: {
    scrollFn() {
      // pc端
      document.documentElement.scrollTop = this.windowH; // 滚动条滚动到指定位置
      // 适配移动端
      document.body.scrollTop = this.windowH;
    },
    homeNavbarHandle() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= this.windowH) {
        this.navbar.classList.remove('custom-navbar');
      } else {
        this.navbar.classList.add('custom-navbar');
      }
    }
  }
}
</script>