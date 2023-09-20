<template>
<div id="home">
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
  </div>

</template>


<script setup>

import HeaderComponent from "@/components/Header-Component.vue";
import FooterComponent from "@/components/Footer-Component.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-size:cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("../public/Assets/Img/fond.jpg");
  height: 100%;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1{
  color:white;
}
</style>