import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { convertDateToString } from './filters/date/date.filter'
// import FancyButton from './components/FancyButton.vue'

// Vue.component('fancy-button', FancyButton)

Vue.filter('date', convertDateToString)
Vue.use(Vuex)

const moduleA = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
     if ((state.count + rootState.count) % 2 === 1) {
       commit('increment')
     }
   }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    },
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

const moduleB = {
  state: () => ({  }),
  mutations: {  },
  actions: {  }
}

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
 },
 modules: {
   a: moduleA,
   b: moduleB
 }
})

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
