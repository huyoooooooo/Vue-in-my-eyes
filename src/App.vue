<template>
  <div id="app">
    <img src="./assets/scenery.jpg">
    <div v-if="flag" ref="msg">
      {{msg}}
    </div>
    <div v-if="!flag">
      {{msg1}}
    </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      msg: 'Hello World',
      msg1: 'Hello Vue'
    }
  },
  methods: {
    change() {
      // this.msg = Math.random();
      this.$nextTick(() => {
        console.log('nextTick prev:', this.$refs.msg.innerHTML)
      })
      this.msg = 'Hello Vue';
      console.log('sync:', this.$refs.msg.innerHTML)
      this.$nextTick(() => {
        console.log('nextTick next:', this.$refs.msg.innerHTML)
      })
      this.$nextTick().then(() => {
        console.log('nextTick with promise:', this.$refs.msg.innerHTML)
      })
    },
    toggle() {
      this.flag = !this.flag;
    }
  },
  // 常见的嵌套型 Bug
  // watch: {
  //   msg() {
  //     this.msg = Math.random();
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>