<template>
  <div id="app">
    <Game name='checkers' />
  </div>
</template>

<script>
import * as componentsGame from './components';

export default {
    name: 'app',
    components: {
        ...componentsGame
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
