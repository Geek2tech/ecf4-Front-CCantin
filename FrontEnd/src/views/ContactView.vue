

<template>
  <HeaderComponent/>
  <h1>Contact</h1>
  <div> {{value}} </div>
</template>

<script >
import HeaderComponent from "@/components/Header-Component.vue";

export default {
  name:'Contact-View',
  components: {HeaderComponent},
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