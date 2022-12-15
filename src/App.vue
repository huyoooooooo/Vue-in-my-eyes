<template>
  <div id="app">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.val }}</li>
    </ul>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {id: 0, val: 'A'},
        {id: 1, val: 'B'},
        {id: 2, val: 'C'},
        {id: 3, val: 'D'}
      ]
    }
  },
  methods: {
    change() {
      this.items.reverse().push({ id: 5, val: 'F' })
      this.items.splice(1, 1, {id: 4, val: 'E'})
    }
  }
}
</script>