<template>
  <el-icon
    @click="handleCollapse"
    v-show="store.isCollapse"
    style="cursor: pointer;"
  >
    <expand />
  </el-icon>
  <el-icon
    @click="handleCollapse"
    v-show="!store.isCollapse"
    style="cursor: pointer;"
  >
    <fold />
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
