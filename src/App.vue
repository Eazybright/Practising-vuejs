<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> --> 
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about/sule">About</router-link>
        <router-link to="/lifecycle">LifeCycle</router-link>
      </nav>
    <router-view/>
    <!-- <Skills/> -->
  </div>
</template>

<script>
// import Skills from './components/Skills.vue s9kBhuzqwzvQfvRCkgX-'

export default {
  name: 'App',
  // components: {
  //   Skills
  // }
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
      width: 50%;
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
