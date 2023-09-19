<template>
  <div class="home">

      <HeaderComponent/>
<h1 class=" centered titreAcceuil">Charles Cantin  Photographe</h1>
      <FooterComponent/>
    </div>

</template>

<script>
// @ is an alias to /src


import HeaderComponent from "@/components/Header-Component.vue";
import FooterComponent from "@/components/Footer-Component.vue";

export default {
  name: 'HomeView',
  components: {FooterComponent, HeaderComponent}
}
</script>

<style scoped>


.home{
  height: 100vh;
}
.titreAcceuil{
  font-size:10em;
  color: #f9fafbbd;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

 }

</style>