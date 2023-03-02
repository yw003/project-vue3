<template>
  <div>
    <router-view />
    <Footer v-if="$route.meta.TabbarShow"/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import { useRouter } from 'vue-router';
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
div {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-bottom: 20px;
}

html,
body {
  max-width: 100%;
  background-color: #f5f5f5;
  overflow-x: hidden;
}
div,
p {
  white-space: normal;
  word-break: break-all;
  word-warp: break-word;
}
</style>
