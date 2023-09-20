

<template>
<div class="contatPage">
  <h1>Contact</h1>
  <h1> {{value}} </h1>
</div>
</template>

<script >



export default {
  name:'Contact-View',
  components: {},
  data(){
    return {
      value: process.env.VUE_APP_STRAPI_URL,

    }
  },
}

</script>

<style scoped>
.HeaderLink a {

  color:black;
}
.contatPage{
  height: 100vh;
}
</style>