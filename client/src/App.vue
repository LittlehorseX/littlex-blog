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
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  /*color: #34495e;*/
}
ul {
  list-style: none
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
div, button, input:focus {
  outline: none;
}
#article {

}
</style>
