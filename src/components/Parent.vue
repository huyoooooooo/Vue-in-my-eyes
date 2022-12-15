<template>
  <Child v-bind="$props"></Child>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  components: {
    Child
  },
  props: ['flag'],
  data() {
    return {

    }
  }
}
</script>