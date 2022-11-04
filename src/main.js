import Vue from 'vue'

const vm = new Vue({
  el: '#app',
  // template: `<div id="newApp">{{message}}</div>`,
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