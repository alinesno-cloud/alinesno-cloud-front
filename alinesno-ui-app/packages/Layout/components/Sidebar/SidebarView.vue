<template>
  <div class="sidebar-view">
    <h1 class="sidebar-title">
      {{ currentApplicationName }}
    </h1>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      currentApplicationName: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        var v = this.$store.state.permission.currentApp
        this.currentApplicationName = v.applicationName
      }, 500)
    })

  }
}

</script>

<style lang="scss" scoped>
.sidebar-view {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #333;
  background: #f5f5f5;
  text-align: left;
  overflow: hidden;
}

.sidebar-title {
  display: inline-block;
  margin: 0;
  color: #333;
  margin-left: 20px;
  font-weight: 600;
  line-height: 50px;
  font-size: 14px;
  vertical-align: middle;
}

</style>
