---
home: true
heroText: '时刻充满希望'
bgImage: 'https://photo.smallsunnyfox.com/images/blog/bg.png'
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
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight
      // pc端
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
      // 适配移动端
      document.body.scrollTop = windowH;
    }
  }
}
</script>