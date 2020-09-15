<template>
  <div class="skills">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="name">
      <h1 v-once>{{name}}</h1>
    </div>
    <div class="button">
      {{ btnState ? 'The button is disabled' : 'The button is active'}}
      <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    </div>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>
      <p v-if="skills.length >= 1">You have more than 1 skill</p>
      <p v-else>You have {{skills.length}} skill</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: "Vuejs Course Intro",
      btnState: true,
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" }
      ]
    }
  }
  // props: {
  //   // msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #fff457;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
