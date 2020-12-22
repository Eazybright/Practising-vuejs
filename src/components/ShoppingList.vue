<script>
import EventBus from '../EventBus'

export default {
  name: 'ShoppingList',
  props: ['shoppingList'],
  created(){
    EventBus.$on('addShoppingItem', (item) => {
      console.log(`There was an item added! ${item}`)
    })
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in shoppingList" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>