<template>
  <div id="app">
    <Parent :flag="flag"></Parent>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import Parent from '@/components/Parent.vue'
export default {
  name: 'App',
  components: {
    Parent
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag
    }
  }
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
