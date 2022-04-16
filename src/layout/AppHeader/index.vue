<template>
  <el-row :gutter="20">
    <el-col :span="2">
      <ToggleSidebar />
    </el-col>
    <el-col :span="6">
      <Breadcrumb />
    </el-col>
    <el-col :span="6">
      <FullScreen />
    </el-col>
  </el-row>

  <div />
</template>
<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
</script>
<style scoped>
</style>
