import Vue from 'vue'

const vm = new Vue({
  el: '#app',
  render(createElement) {
    return createElement('div', {
      attrs: {
        id: 'newApp'
      }
    }, this.message)
  },
  data() {
    return {
      message: 'Eloim Essaim'
    }
  }
})