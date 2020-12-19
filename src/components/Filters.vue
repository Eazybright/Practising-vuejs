<script>

export default {
  name: 'Filters',
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Paul',
          dob: new Date(2000, 5, 29),
        },
        {
          id: 2,
          name: 'Terry',
          dob: new Date(1994, 10, 25),
        },
        {
          id: 3,
          name: 'Alex',
          dob: new Date(1973, 4, 15),
        },
        {
          id: 4,
          name: 'Deborah',
          dob: new Date(1954, 2, 5),
        }
      ]
    }
  }
}
</script>

<template>
 <div>
  <ul>
   <li v-for="person in people" v-bind:key="person.id">
    {{person.name}} {{person.dob | date}}
   </li>
  </ul>
 </div>
</template>