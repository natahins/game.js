<template>
  <div id="app">
      <component :is="component"></component>
  </div>
</template>

<script>
import titleComponent from './components/Title.vue'
import Playground from './components/Playground.vue'
import Game from './components/Game.vue'


export default {
  name: 'app',
  components: {
      titleComponent, 
      Playground,
      Game
  },
  computed: {
     ...mapGetters({
             component: 'getCurrentComponent'
      })
  }
}
</script>

<style>
html { height: 100%;
background-color: black; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: black;
}
</style>
