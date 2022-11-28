import Vue from 'vue'

let mixin = {
  created() {
    console.log('child mixin created')
  }
}

let childComp = {
  template: `<div>{{msg}}</div>`,
  mixins: [mixin],
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
    console.log('global mixin created')
  }
})

new Vue({
  el: '#app',
  mounted() {
    console.log('parent mounted')
  },
  render: (h) => h(childComp)
})