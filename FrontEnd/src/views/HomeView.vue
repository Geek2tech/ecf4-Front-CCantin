<template>
  <div class="homePage">


    <h1 class="  centered titreAcceuil">Charles Cantin Photographe</h1>

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


.titreAcceuil {
font-size: 10em;
  color: #f9fafbbd;
}


.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

}
.homePage{
  height: 100vh;
}
@media (max-width: 1100px) {
.titreAcceuil {
  font-size: 5em;
}
}
@media (max-width: 500px ) {
  .titreAcceuil {
    font-size:3em;
  }
}

</style>