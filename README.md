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
      navbar: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const ifJanchor = document.getElementById('JanchorDown'); 
      ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
      let a = document.createElement('a');
      a.id = 'JanchorDown';
      a.className = 'anchor-down';
      document.querySelector('.hero').append(a);
      let targetA = document.getElementById('JanchorDown');
      targetA.addEventListener('click', e => { // 添加点击事件
        this.scrollFn();
      })

      this.navbar = document.querySelector('.navbar');
      this.navbar && this.navbar.classList.add('custom-navbar');
      document.addEventListener('scroll', this.homeNavbarHandle);
    })
  },
  beforeDestroy() {
    this.navbar.classList.remove('custom-navbar');
    document.removeEventListener('scroll', this.homeNavbarHandle);
  },
  methods: {
    scrollFn() {
      const windowH = document.querySelector('.hero').clientHeight;
      // pc端
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
      // 适配移动端
      document.body.scrollTop = windowH;
    },
    homeNavbarHandle() {
      const windowH = document.querySelector('.hero').clientHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= windowH) {
        this.navbar.classList.remove('custom-navbar');
      } else {
        this.navbar.classList.add('custom-navbar');
      }
    }
  }
}
</script>