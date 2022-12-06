<template>
  <div id="app">
    <img src="./assets/scenery.jpg">
    <div>
      {{msg}}
    </div>
    <input type="text" v-model="msg.c">
    <ul>
      <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
    <button @click="add">add</button>
    <button @click="change">change</button>
    <button @click="show">show</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  data() {
    return {
      msg: {
        a: 'Hello World'
      },
      items: [1, 2]
    }
  },
  methods: {
    add() {
      // this.items[1] = 3;
      Vue.set(this.items, 1, 3);
    },
    change() {
      Vue.set(this.msg, 'b', 'vue');
      // this.msg.b = 'Vue';
      this.items.push(4);
      // this.items[2] = 4;
    },
    show() {
      console.log(this.msg)
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
