<template>
    <div>
        <iframe :src="frameUrl" frameborder="0" id="pre-frame" ref="iframe" class="iframeContainer"></iframe>
    </div>
</template>
<script>

export default {
    data() {
      return {
          frameUrl: 'http://document-hub.lbxinhu.linesno.com:23456/document-platform-service-technique/11_%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/01_%E5%B9%B3%E5%8F%B0%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82.html'
      }
    },
    methods: {
        init() {
          console.log('init Method')
          var query=this.$route.query;
          let url = query.url ;

          console.log('frameUrl = ' + url)
        }
      },
      created() {
        console.log('created Event  --> Goto init()')
        this.init()
      },
      goBack() {
          this.$router.go(-1);//返回上一层
      }
}

</script>

<style scoped lang="scss">
.iframeContainer{
    width:100% ;
    height: calc(100vh - 60px) ;
}
</style>


