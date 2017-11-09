<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
ul {
  list-style: none
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
div, input:focus {
  outline: none;
}
</style>
