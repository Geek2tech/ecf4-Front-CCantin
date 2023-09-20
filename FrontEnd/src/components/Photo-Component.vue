<template>
  <div>

    <img :src=url :value="categorie" :alt="description" class="photo img-fluid">
    <br>
    {{categorie}}

  </div>
  
</template>

<script >
export default {
  name:'Photo-Component',
  props : ['categorie','url','description']
}





</script>
<style scoped>
div{
  color:red;
}
.photo{
  border-radius: 20%;
  border: 8px solid papayawhip;
  transition: all 0.7s ease-in-out;

}
.photo:hover{

  transform: scale(160%);
  border: 2px solid papayawhip;
  -webkit-box-shadow: 5px 5px 48px 29px #000000;
  box-shadow: 5px 5px 48px 29px #000000;
}

@media  ( max-width:575px) {
  .photo:hover{
    transform: none;
    border: 8px solid papayawhip;

}


}

</style>