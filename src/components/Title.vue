<template>
    <div class="title">
        <div class="content">
        <h2 class="main-title">Смертельные шашки</h2>
        <br>
        <button class="start-button" @click="changeCompo">Начать игру</button>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'titleComponent',
    methods: {
      changeCompo() {
         this.$store.dispatch('changeCurrentComponent', "Playground");
      },
      ...mapActions(['changeCurrentComponent'])
    }
}
</script>

<style>
.title {
    width: 100%;
    height: 700px;
    background-image: url("../assets/title.jpg");
    display: flex;
    justify-content: center; 
    align-items: center;
    font-size: 40px;
    margin-top: 60px;
}
.main-title{
  margin-top: -200px;
}

.start-button{
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  height: 30px;
}
.start-button:hover{
  font-size: 50px; 
}
</style>
