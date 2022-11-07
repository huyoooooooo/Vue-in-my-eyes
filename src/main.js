import Vue from 'vue'
import App from './App'

// Vue.component('app',  App);
new Vue({
  el: '#app',
  // template: `<App></App>`
  render: h => h(App)
})