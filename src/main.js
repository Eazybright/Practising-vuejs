import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    //comit with a payload
    incrementNTimes(state, payload){
      state.count += payload.amount
    }
  },
  actions: {
    incrementAsync ({ commit }) {
     setTimeout(() => {
       commit('increment')
     }, 1000)
   },
   increment({ commit }) {
     commit('increment')
     console.log(this.state.count)
   },
   decrement({ commit }) {
     if(this.state.count == 0){
       return false;
     }
     commit('decrement')
     console.log(this.state.count)
   },
   incrementNTimes({ commit }, n){
     commit('incrementNTimes', {
       amount: n
     })
     console.log(this.state.count)
   }
 }
})

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
