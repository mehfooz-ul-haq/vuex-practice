<template>
  <div id="app" class="container">
    <todo-list />
    <todo-form />
  </div>
</template>

<script>
import TodoList from './components/todos/TodoList';
import TodoForm from "./components/todos/TodoForm";

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
    width: 800px;
    margin: 0 auto;
}
ul {
    text-align: left;
}
</style>
