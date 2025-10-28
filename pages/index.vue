<template>
  <div class="container">
    <h1>Todo List (SSR Rendered)</h1>

    <ul v-if="todos && todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <strong>#{{ todo.id }}</strong> - {{ todo.title }}
      </li>
    </ul>

    <p v-else>Loading todos...</p>
  </div>
</template>

<script setup>
// asyncData() alternative in Composition API → useAsyncData()
const { data: todos } = await useAsyncData('todos', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
)
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
h1 {
  color: #007acc;
  margin-bottom: 20px;
}
li {
  margin: 8px 0;
}
</style>
