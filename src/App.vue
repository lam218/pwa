<template>
  <div>
    <nav-header />
    <todo-list list-name="My to-dos" />
  </div>
</template>

<script>
import TodoList from "./components/ToDoList";
import NavHeader from "./components/Header";
export default {
  name: "App",
  components: {
    TodoList,
    NavHeader
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
