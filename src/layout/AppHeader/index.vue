<template>
  <el-space size="large">
    <Hamburger />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <FullScreen />
  </el-space>
</template>
<script lang="ts" setup>
import Hamburger from './Hamburger.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
</script>
<style scoped>
i{
  font-size: 19px;
  cursor: pointer;
}
</style>
