<template>
  <div class="skills">
    <div class="name">
      <h1 v-once>{{name}}</h1>
    </div>
    <div class="button">
      {{ btnState ? 'The button is disabled' : 'The button is active'}}
      <!-- <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->
    </div>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>
      <p v-if="skills.length >= 1">You have more than 1 skill</p>
      <p v-else>You have {{skills.length}} skill</p>

      <!-- class binding -->
      <div v-bind:class="{ alert_yellow: showAlert }"></div>

      <!-- multiple class binding -->
      <div v-bind:class="{ alert_blue: showAlert, 'another-class': showClass }"></div>

      <!-- class binding with an object -->
      <div v-bind:class="alertObject"></div>

      <!-- style binding -->
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>

      <!-- style binding with object -->
      <div v-bind:style="styleObject"></div>
      
    </div>

    <div class="container">
      <!-- form validation -->
      <form @submit.prevent="addSkill">
        <ValidationProvider rules="min:3" v-slot="v">
          <input type="text" placeholder="Enter a skill you have.." v-model="skill" name="skill"><br>
          <!-- <input v-model="value" type="text"> -->
          <span>{{ v.errors[0] }}</span>
        </ValidationProvider>

        
        <!-- <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p> -->
        <!-- {{ skill }} -->
        <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
      </form>

      <div class="skill-set">
        <ul>
          <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
        </ul>
        <p>These are the skills that you possess.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'

extend('min', {
  validate(value, {length}) {
    return value.length >= length;
  },
  params: ['length'],
  message: 'The {_field_} field must have at least {length} characters'
});


export default {
  name: 'Skills',
  data() {
    return {
      name: "Vuejs Course Intro",
      btnState: true,
      // checked:false,
      skill: '',
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" }
      ],
      showAlert: true,
      showClass: false,
      alertObject:{
        alert_red: true
      },
      bgColor: 'pink',
      bgWidth: '100%',
      bgHeight: '30px',
      styleObject: {
        backgroundColor: 'black',
        width: '100%',
        height: '30px'
      }
      // showClass: true
    }
  },
   methods : {
    addSkill(){
        // if(this.$errors){
        //   console.log('error')
        // }
        console.log(this.$v)
        // this.skills.push({skill: this.skill});
        // this.skill = '';
        // console.log('The checkbox value is: '+this.checked)
    }
  },
  components: {
    ValidationProvider
  },
  // props: {
  //   // msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .skill-set {
    background: #fff;
  }

  .skill-set ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .skill-set ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  .skill-set p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
    margin-top: 20px;
  }

  .alert_yellow {
    background-color: yellow;
    width:100%;
    height: 30px;
  }

  .alert_blue {
    background-color: blue;
    width:100%;
    height: 30px;
  }

  .alert_red {
    background-color: red;
    width:100%;
    height: 30px;
  }
</style>


