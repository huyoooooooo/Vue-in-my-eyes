import Vue from 'vue'

let childComp = {
  template: `<div>{{msg}}</div>`,
  created() {
    console.log('child created')
  },
  mounted() {
    console.log('child mounted')
  },
  data() {
    return {
      msg: 'Eloim Essaim'
    }
  }
}

Vue.mixin({
  created() {
    console.log('parent created')
  }
})

new Vue({
  el: '#app',
  mounted() {
    console.log('parent mounted')
  },
  render: (h) => h(childComp)
})
