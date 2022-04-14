import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routers'
import { createPinia } from 'pinia'
createApp(App)
  .use(router)
  .use(createPinia())// 创建根存储库
  .mount('#app')
