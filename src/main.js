import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 设置全局axios默认配置
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://your-backend-api-url.com'; // 替换为你的后端API地址

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
