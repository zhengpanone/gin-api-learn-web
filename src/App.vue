
<template>
  <div>{{ mainStore.name }}</div>
  <!-- 路由渲染出口 -->
  <router-view />
</template>
<script setup lang="ts">
import { useMainStore } from '@/store/index'
const mainStore = useMainStore()
</script>
<style>

  </style>
