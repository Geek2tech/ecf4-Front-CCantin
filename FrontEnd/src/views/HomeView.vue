<template>
  <div class="home">
    <div class="bg-image" >
<h1 class="centered titreAcceuil">Charles Cantin  Photographe</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
img {
  width: -webkit-fill-available;
}

.bg-image{
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../../public/Photo_Acceuil.jpg");
  height: 100%;
}
.home{
  height: 100vh;
}
.titreAcceuil{
  font-size:5em;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

 }
</style>