import Vue from 'vue'
import App from './App.vue'

// 导入
import store from './store'

Vue.config.productionTip = false

// 挂载
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
