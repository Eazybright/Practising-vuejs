<template>
  <div>
    <h1>V-Model</h1>
    <label>Name:</label>
    <input type="text" v-model="name">
    <p>{{name}}</p>
    <input type="checkbox" v-model="checked">
    <span>Am I checked? {{checked ? 'Yes' : 'No' }}</span>
 </div>
</template>

<script>
export default {
  name: 'VModel',
  data() {
    return {
      name: '',
      checked: ''
    }
  }
}
</script>
