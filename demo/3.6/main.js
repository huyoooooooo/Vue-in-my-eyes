import Vue from 'vue'
import App from './App'

/* 工厂函数
Vue.component('HelloWorld', function(resolve, reject) {
  // 这里特殊的 require 语法告诉 webpack
  // 自动将编译后的代码分割成不同的块
  require(['./components/HelloWorld.vue'], function(res) {
    resolve(res)
  })
})
*/

/* Promise 
Vue.component('HelloWorld', () => import('./components/HelloWorld.vue'))
*/

/* 高级异步组件 */
const LoadingComp = {
  template: `<div>loading</div>`
}
const ErrorComp = {
  template: `<div>error</div>`
}
const AsyncComp = () => ({
  component: import('./components/HelloWorld.vue'),
  loading: LoadingComp,
  error: ErrorComp,
  delay: 200,
  timeout: 1000
})

Vue.component('HelloWorld', AsyncComp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
