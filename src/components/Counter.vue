<template lang="html">
  <div>
    <h1>Count: {{count}}</h1>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
    <button v-on:click="incrementNTimes(5)">Increment 5 times</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'count'
    ]),
  },
    // arrow functions can make the code very succinct!
    // count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
    // {
    //   count () {
    //     return this.$store.state.count
    //   }
    // }

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
    },
    incrementNTimes(n){
      this.$store.commit('incrementNTimes', {
        amount: n
      })
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
