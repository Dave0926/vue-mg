<template>
  <div class="tag">
    <el-tag
      size="small"
      v-for="tag in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu()"
      @close="handleClose"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonTag',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList
    })
  },
  methods: {
    changeMenu () {},
    handleClose () {}
  }
}
</script>
<style lang="less" scoped></style>
