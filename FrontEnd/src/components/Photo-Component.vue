<template>
<!-- affichage d'une photo -->
  <div>
    <img :src=url :value="categorie" :alt="description" class="photo img-fluid">
    <div id="categorieText">
    {{categorie}}
    </div>
  </div>
  
</template>

<script >
export default {
  name:'Photo-Component',
  props : ['categorie','url','description']
}





</script>
<style scoped>
#categorieText{
  color:papayawhip;
  margin-top: 10px;
  font-style: italic;
  font-size : 1.5rem;
  font-weight: bold;
}
.photo{
  border-radius: 20%;
  border: 8px solid papayawhip;
  transition: all 0.7s ease-in-out;

}
.photo:hover{
  z-index:9;
  transform: scale(160%);
  border: 2px solid papayawhip;
  -webkit-box-shadow: 5px 5px 48px 29px #000000;
  box-shadow: 5px 5px 48px 29px #000000;
}


@media  ( min-width:481px) and (max-width:920px) {
  .photo:hover {
    transform: scale(120%);
    border: 8px solid papayawhip;

  }
}


@media  ( max-width:480px) {
  .photo:hover{
    transform: none;
    border: 8px solid papayawhip;

}


}

</style>