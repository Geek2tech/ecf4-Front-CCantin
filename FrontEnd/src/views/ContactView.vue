

<template>

  <h1>Contact</h1>
  <div> {{value}} </div>

</template>

<script >



export default {
  name:'Contact-View',
  components: {},
  data(){
    return {
      value: process.env.VUE_APP_STRAPI_URL,

    }
  }
}

</script>

<style scoped>
.HeaderLink a {

  color:black;
}
</style>