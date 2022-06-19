<template>
  <el-container style="height: 100%">
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'

export default {
  name: 'MainView',
  components: {
    CommonAside,
    CommonHeader
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>
