<template>
  <div>
    <div v-html="html" />
    <p>
      <br />
      —————————— <br />
      作者：小陈同学<br />
      链接：<a :href="location">{{ location }}</a> <br />
      来源：知识库 <br />
      版权声明：著作权归原作者所有，商业转载请联系作者获得授权，非商业转载请注明出处。
    </p>
  </div>
</template>

<script>
export default {
  props: ["html"],
  created() {
    this.location = window.location;
  },
};
</script>

<style scoped>
</style>