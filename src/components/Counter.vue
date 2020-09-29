<template lang="html">
  <div>
    <h1>Count: {{count}}</h1>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
    <button v-on:click="incrementNTimes(5)">Increment 5 times</button>
    <button v-on:click="incrementAsync">Increment asynchronously (after 1 seconds)</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'count'
    ]),
  },
  methods: {
    ...mapActions(['incrementAsync', 'increment', 'decrement', 'incrementNTimes']),
  }
}
</script>

<style lang="css" scoped>
</style>
