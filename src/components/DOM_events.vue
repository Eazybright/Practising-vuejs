<script>
export default {
  name: 'DOM_events',
  data(){
    return {
      person: '',
      people: [],
      role: '',
      roleList: this.returnRole()
    }
  },
  methods: {
  addPerson() {
    this.people = this.people.concat(
      { id: this.people.length, name: this.person }
    )
    this.person = ''
  },
  *returnRole() {
    yield 'guest';
    yield 'user';
    yield 'admin';
  },
  getRole() {
   /**
    * Calling this.roleList.next() gives us an Iterator object with the interface of:
    * { value: string, done: boolean}
    * We can therefore check to see whether this was the >last< yielded value with done, 
    * or get the result by calling .value
    */

    this.role = this.roleList.next().value;
  }
 }
}
</script>

<template>
  <div>
    <div>
      <ul>
      <li v-for="(p, index) in people" :key="index">
        {{p}}
      </li>
      </ul>
      <form @submit.prevent="addPerson">
        <input type="text" v-model="person" />
        <button>Add {{ person}} </button>
      </form>
    </div>
    <div>
      <article v-if="role === 'admin'">
        <header>Yu're an admin!</header>
        <section class="main">
          <h1>If you can see this, you're an admin!</h1>
        </section>
      </article>
      <article v-else-if="role === 'user'">
        <header>You're a user!</header>
        <section class="main">
          <h1>Enjoy your stay!</h1>
        </section>
      </article>
      <article v-else-if="role === 'guest'">
        <header>You're a guest!</header>
        <section class="main">
          <h1>Maybe you should make an account.</h1>
        </section>
      </article>
      <h1 v-else>You have no role!</h1>

      <button @click="getRole()">Switch role</button>
    </div>
  </div>
</template>