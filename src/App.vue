<template>
  <div>
    <div>
    <fancy-button></fancy-button>
    <button>I'm another button!</button>
    </div>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about/sule">About</router-link>
        <router-link to="/lifecycle">LifeCycle</router-link>
        <router-link to="/counter">Counter</router-link>
        <router-link to="/v-model">VModel</router-link>
      </nav>
      <nav>
        <router-link to="/iterations">Iterations</router-link>
        <router-link to="/dom-events">DOM-events</router-link>
        <router-link to="/filters">Filters</router-link>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
import FancyButton from './components/FancyButton.vue'
export default {
  name: 'App',
  components:{
    FancyButton
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    padding-top: 50px;
  }

  body, html {
    margin: 0;
    height: 100%;
  }

  #app {
    width: 100%;
  }

  nav {
    padding: 20px 20px 20px 0;
  }

  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
</style>
