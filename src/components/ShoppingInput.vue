<script>
import EventBus from '../EventBus'

export default {
  name: "ShoppingInput",
  data(){
    return {
      itemName: ''
    }
  },
  methods:{
    addShoppingItem(){
      if(this.itemName.length > 0){
        EventBus.$emit('addShoppingItem', this.itemName)
        this.itemName = ""
      }
    }
  }
}
</script>

<template>
  <div>
    <input v-model="itemName">
    <button @click="addShoppingItem()">Add Shopping Item</button>
  </div>
</template>