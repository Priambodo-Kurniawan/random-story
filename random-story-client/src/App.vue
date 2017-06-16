<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
body {
  background: #f9f7f6;
  color: #404d5b;
  font-weight: 500;
  font-size: 1.05em;
  font-family: 'Raleway', Arial, sans-serif !important;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: 'Raleway', Arial, sans-serif !important;
}
strong {
  font-weight: bold;
}
</style>
