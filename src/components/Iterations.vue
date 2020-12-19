<template>
  <div>
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li v-for="item in groceries" v-bind:key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <h1 :class="{ 'red': red, 'strike-through': strikeThrough }"  :style="[headingStyles, layoutStyles]">
        Vue Bindings
      </h1>

      <input type="checkbox" v-model="red" >
      <span>Red</span>

      <input type="checkbox" v-model="strikeThrough">
      <span>Strike Through</span>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Iterations',
  data(){
    return {
      red: false,
      strikeThrough: false,
      headingStyles: {
        color: 'blue',
        fontSize: '20px',
        textAlign: 'center'
      },
      layoutStyles: {
        textAlign: 'center',
        padding: '10px'
      },
      groceries: [
        {
          id: 1,
          name: 'Pizza',
          quantity: 1
        },
        {
          id: 2,
          name: 'Hot Sauce',
          quantity: 5
        },
        {
          id: 3,
          name: 'Salad',
          quantity: 1
        },
        {
          id: 4,
          name: 'Water',
          quantity: 1
        },
        {
          id: 5,
          name: 'Yoghurt',
          quantity: 1
        }
      ]
    }
  }
}
</script>

<style>
.red {
 color: red;
}
.strike-through {
 text-decoration: line-through;
}
</style>
