<template lang="html">
  <div>
    <h1>Count: {{count}}</h1>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    decrement() {
      if(this.$store.state.count == 0){
        return false;
      }
      this.$store.commit('decrement')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
