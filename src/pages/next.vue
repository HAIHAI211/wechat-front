<template>
  <section class="page next-page">
    接收到腾讯发送来的{{code}}
  </section>
</template>
<script>
export default {
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    this.code = this.$route.query.code
  }
}
</script>
<style lang="scss" scoped>
  .next-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
