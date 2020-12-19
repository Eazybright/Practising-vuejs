<script>
export default {
  name: 'FancyButton',
  data() {
  return {
   buttonText: 'Hello World!'
  }
 }
}
</script>

<template>
  <button>
    {{buttonText}}
  </button>
</template>

<style scoped>
button {
  border: 1px solid black;
  padding: 10px;
}
</style>