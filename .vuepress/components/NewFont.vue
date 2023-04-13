<template>
  <div></div>
</template>
 <script>
export default {
  name: "",
  data() {
    return {
      strs: [
        {
          title: "以梦为马，不负韶华，流年笑掷，未来可期，不负初心，方得始终。",
          // 停顿的位置
          // stop: 5,
          stop: [5, 10, 15, 20, 25, 30],
          // stop: [4, 13] // 可以是数组，多几个位置停顿
        },
        {
          title: "远赴人间惊鸿宴,一睹人间盛世颜。",
          stop: [8, 16],
        },
        {
          title: "往日暗沉不可追，来日之路光明灿烂。",
          stop: [8, , 17],
        },
        {
          title: "少年遥想得山田，请赶在日落下山前，日落下山得山田，归来仍是那少年。",
          stop: [8, , 16, 24, 32],
        },
        {
          title: "北方有佳人，绝世而独立。一顾倾人城，再顾情人过。宁不知倾城与倾国，佳人在难得。",
          stop: [6, 12, 18, 24, 33, 39],
        },
        {
          title: "古之立大事者,不惟有超世之才,亦必有坚忍不拔之志。",
          stop: [7, 15, 25],
        },
        // {
        //   title: '你才二十多岁，没遇到喜欢的人很正常，往后你会发现，大概是遇不到了。',
        // },
        // {
        //   title: '两情相悦如今已经不多了，尤其在物欲横流的今天这已是奢望。但我仍然带着我的热情跟向往在等待那个风雨夜归的人。',
        // },
        // {
        //   title: '现在的爱情不归月老管了， 他老人家早退休了， 现在归财神管。',
        // },
        // {
        //   title: '可惜我啊，相貌平平，一事无成，惊艳不了谁的岁月，温暖不了谁的人生。',
        // },
        // {
        //   title: '我本以为早踏入社会是一件多么美好的事，但是现在才知道社会多么的残酷无情。',
        // },
        // {
        //   title: '卦不敢算尽，恐天道无常。情不敢至深，恐大梦一场。',
        // },
        // {
        //   title: '你羡慕的生活背后都是你熬不起的苦。',
        // },
      ],
      // 当前进行到第几行
      currentIndex: 0,
      spans: null,
      el: null,
      titleEl: null,
      bubbles: null
    };
  },
  mounted() {
    if (!this.el) {
      const timer = setInterval(() => {
        this.el = document.querySelector(".hero .description");
        this.titleEl = document.querySelector(".hero h1");
        if (this.el) {
          this.titleEl.style.fontWeight = "bold";
          timer && clearInterval(timer);
          this.init();
        }
      }, 100);
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      if (this.currentIndex == this.strs.length) {
        this.currentIndex = 0;
      }
      const current = this.strs[this.currentIndex];
      this.el.innerHTML = current instanceof Object ? current.title : current;
      this.el.innerHTML = this.el.textContent.replace(/\S/g, "<span>$&</span>");

      let delay = 0;
      this.spans = [...document.querySelectorAll(".hero .description span")];
      this.spans.forEach((span, i) => {
        delay += 0.1;
        if (current.hasOwnProperty("stop")) {
          if (current.stop instanceof Array) {
            if (current.stop.includes(i)) {
              delay += 0.3;
            }
          } else {
            if (current.stop == i) {
              delay += 0.3;
            }
          }
        }

        span.style.setProperty("--delay", `${delay}s`);
      });

      this.el.addEventListener("animationend", this.lastEnd);
    },

    lastEnd(e) {
      if (
        e.target == document.querySelector(".hero .description span:last-child")
      ) {
        this.el.classList.add("ended");
        setTimeout(() => {
          this.el.removeEventListener("animationend", this.lastEnd);
          let delay = 0;

          this.spans.reverse().forEach((span, i) => {
            this.el.classList.remove("ended");
            span.style.width = "2ch";
            span.style.animation = "0.1s text-out ease-in-out forwards";
            delay += 0.05;

            // 回去停顿功能
            // if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
            //   if (this.strs[this.currentIndex].stop instanceof Array) {
            //     if (
            //       this.strs[this.currentIndex].stop.includes(
            //         this.spans.length - i
            //       )
            //     ) {
            //       delay += 0.3;
            //     }
            //   } else {
            //     if (
            //       this.strs[this.currentIndex].stop ==
            //       this.spans.length - i
            //     ) {
            //       delay += 0.3;
            //     }
            //   }
            // }

            span.style.animationDelay = `${delay}s`;
          });
          this.el.addEventListener("animationend", this.firstEnd);
        }, 1500);
      }
    },

    firstEnd(e) {
      if (
        e.target ==
        document.querySelector(".hero .description span:first-child")
      ) {
        this.spans.forEach((v) => {
          v.remove();
        });
        this.el.removeEventListener("animationend", this.firstEnd);
        this.currentIndex++;
        this.init();
      }
    },
  },
};
</script>
 <style>
.hero .description {
  margin: 0;
  padding: 0;
  /* 必须是等宽字体 */
  /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
  font-family: monospace;
  position: relative;
  width: fit-content;
}

.hero .description span:last-child::after {
  content: "";
  display: inline;
  position: absolute;
  width: 2px;
  height: 2ch;
  bottom: .8ch;
  background-color: #000;
  border-radius: 2px;
  animation: .3s cursor steps(2, jump-none) infinite;
}

.hero .description.ended::after {
  animation: 1.1s cursor steps(2, jump-none) infinite;
}

.home-blog .hero .description span {
  --delay: 10s;
  display: inline-block;
  overflow: hidden;
  width: 0ch;
  animation: 0.1s text-in ease-in-out forwards;
  animation-delay: var(--delay);
  font-weight: 600;
}

@keyframes text-in {
  from {
    width: 0ch;
  }
  to {
    /* 必须是等宽字体 */
    /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    /* 中文2ch，英文1ch */
    width: 2ch;
  }
}

@keyframes text-out {
  from {
    /* 中文2ch，英文1ch */
    width: 2ch;
  }

  to {
    width: 0ch;
  }
}

@keyframes cursor {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>      