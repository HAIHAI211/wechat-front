<template>
  <section class="page index-page">
    <el-button type="primary" @click="_link">支付测试按钮</el-button>
    <!--<div class="url">{{url}}</div>-->
    <!--<div>{{ info }}</div>-->
  </section>
</template>
<script>
export default {
  data () {
    return {
      baseUrl: 'https://open.weixin.qq.com/connect/oauth2/',
      appid: 'wxd3142d77da978b24',
      redirectUrl: 'https%3a%2f%2fpay.jkwljy.com%2fgetOpenId',
      // redirectUrl: 'http://b237754e82.qicp.vip/#/next',
      scope: 'snsapi_base',
      info: ''
    }
  },
  computed: {
    url () {
      return `${this.baseUrl}authorize?appid=${this.appid}&redirect_uri=${this.redirectUrl}&response_type=code&scope=${this.scope}&state=STATE#wechat_redirect`
      // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
    }
  },
  mounted () {
    // this.info = '开始主动请求获取openId'
    // window.open(this.url)
  },
  methods: {
    _link () {
      window.open(this.url)
    }
  }
}
</script>
<style lang="scss" scoped>
  .index-page{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .url{
      margin-top: 10px;
      width: 90%;
      word-wrap: break-word;
      font-size: 12px;
    }
  }
</style>
