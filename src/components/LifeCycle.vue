<template>
    <div id="app"> 
        <ul>
            <li v-for="(person,index) in people$" :key="index"> {{person}}
            </li>
        </ul>

         <div class="about">
            <h1>Hello {{ name }}, this is an lifecycle page</h1>
        </div>
    </div>   
</template>

<script>
// Required to create an Observable stream
import { Observable } from 'rxjs'
// import { of } from 'rxjs/add/observable/of'

// New Observable stream of string array values
// const people$ = Observable.of(['Paul', 'Katie', 'Bob']);

export default  {
    name: 'LifeCycle',
    data() {
        return {
            name: 'Paul'
        }
    },
    created() {
        console.log(`Created: Hello ${this.name}`)
    },

    mounted() {
        console.log(`Mounted: Hello ${this.name}`)
        const people$ = Observable.of(['Paul', 'Katie', 'Bob'])
        return {
            people$
        }
    },
    // methods: {
        
    // },
    // subscriptions() {
       
    // }
    // subscriptions: {
    //     people$
    // }
    
}
</script>