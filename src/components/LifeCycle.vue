<script>
// Required to create an Observable stream
// import { Observable } from 'rxjs'
// import { of } from 'rxjs/add/observable/of'

// New Observable stream of string array values
// const people$ = Observable.of(['Paul', 'Katie', 'Bob']);
import axios from 'axios';

export default{
  name: 'LifeCycle',
  data() {
    return {
      fullName: 'Paul',
      id: '',
      user: {},
      msg: "lifecycle hook"
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log(`Created: Hello ${this.fullName}`)
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log(`Mounted: Hello ${this.fullName}`)      
  },
  beforeUpdated() {
    console.log('beforeUpdated') 
  },
  updated() {
    console.log('updated')
  },
  computed: {
    reversedName(){
      return this.fullName.split('').reverse().join('') 
    }
  },
  methods: {
    getDataForUser() { 
      axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then(res => this.user = res.data);
    },
    remove(){
      this.$destroy()
    }
  },
  watch: {
    id() {
      this.getDataForUser()
    }
  },
  beforeDestroy(){
    console.log("Before destroy")
  },
  destroyed(){
    console.log("Destroyed")
  }
  // subscriptions() {
  //    const people$ = Observable.of(['Paul', 'Katie', 'Bob'])
  //     return {
  //         people$
  //     }
  // }
  // subscriptions: {
  //     people$
  // }
  
}
</script>

<template>
  <div id="app"> 
    <!-- <ul>
        <li v-for="(person,index) in people$" :key="index"> {{person}}
        </li>
    </ul> -->

    <div class="about">
      <h1>Hello {{ fullName }}, this is an lifecycle page</h1>
      <h1>Reversed Name: {{ reversedName }}</h1>
    </div>

    <div>
      <input type="number" v-model="id" />
      <p>Name: {{user.name}}</p>
      <p>Email: {{user.email}}</p>
      <p>Id: {{user.id}}</p>
    </div>
    <div>
      <h1>{{msg}}</h1>
      <button @click="msg = 'Updated Hook'">Update Message</button>
      <button @click="remove">Destroy instance</button>
    </div>
  </div>   
</template>