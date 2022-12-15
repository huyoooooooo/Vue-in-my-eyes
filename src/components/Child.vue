<template>
  <div v-if="flag">
    Hello World
  </div>
  <p v-else>
    Hello Vue
  </p>
</template>

<script>
export default {
  props: ['flag'],
  data() {
    return {

    }
  }
}
</script>