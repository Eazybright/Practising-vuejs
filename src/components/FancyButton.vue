<script>
export default {
  name: 'FancyButton',
  props: {
    buttonText: {
    type: [String, Number],
    default: () => {
      "Fancy Button!"
    },
    required: true,
    validator: value => value.length > 3
    }
  },
  data() {
    return {
     message: ''
    }
  },
  methods: {
    clicked(){
      this.$emit('buttonClicked', this.message)
    }
  },
}
</script>

<template>
  <div>
    <input type="text" v-model="message"/>
    <button @click.prevent="clicked">
      {{buttonText}}
    </button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid black;
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
}
</style>