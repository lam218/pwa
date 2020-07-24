<template>
  <div>
    <nav-header />
    <todo-list list-name="My to-dos" />
    <img
      src="https://lp-cms-production.imgix.net/2019-06/28206231.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
    />
  </div>
</template>

<script>
import TodoList from "./components/ToDoList";
import NavHeader from "./components/Header";
export default {
  name: "App",
  components: {
    TodoList,
    NavHeader,
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
img {
  max-width: 100vw;
}
</style>
