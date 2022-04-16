<template>
  <el-icon
    @click="handleCollapse"
  >
    <template v-if="store.isCollapse">
      <expand />
    </template>
    <template v-else>
      <fold />
    </template>
  </el-icon>
</template>
<script lang="ts" setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { useMainStore } from '@/store/index'
const store = useMainStore()
const handleCollapse = () => {
  store.setIsCollapse()
}
</script>
<style scoped>
</style>
