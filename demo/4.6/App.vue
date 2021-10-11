<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      {{ name }}
    </div>
    <button @click="change">change</button>
    <button @click="changeLast">change last name</button>
    <button @click="show">show</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      first: 'Hello',
      lastName: 'World',
      useless: 0,
      nested: {
        a: {
          b: 1
        }
      }
    }
  },
  computed: {
    name() {
      console.log('应该一个输出才对')
      if (this.useless > 0) {
        return this.first + ',' + this.lastName
      }
      return 'please click change'
    }
  },
  methods: {
    change() {
      this.useless++
      this.nested.a.b = 2
    },
    changeLast() {
      this.lastName = 'Vue';
    },
    show() {
      console.log(this.name);
    }
  },
  watch: {
    useless(newVal) {
      console.log('useless: ', newVal)
    },
    name: {
      immediate: true,
      handler(newVal) {
        console.log('name: ', newVal)
      }
    },
    nested: {
      deep: true,
      sync: true,
      handler(newVal) {
        console.log('nested: ', newVal.a.b)
      }
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
