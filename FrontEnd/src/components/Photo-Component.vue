<script >
export default {
  name:'Photo-Component',
  props : ['categorie','url','description']
}





</script>

<template>
  <div>

    <img :src=url :value="categorie" :alt="description" class="photoGalery img-fluid">
    <br>
    {{categorie}}

  </div>
  
</template>

<style scoped>
div{
  color:red;
}
.photoGalery{
  border-radius: 20%;
  border: 10px solid white;
}

</style>