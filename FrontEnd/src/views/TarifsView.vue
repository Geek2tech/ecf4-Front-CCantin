<template>
  <div class="ratePage container">
    <h1>Prestations</h1>
    <img src="../../public/Assets/Img/Logo.png" alt="logo" class="img-fluid logo">
    <div class="serviceContainer row d-flex flex-wrap justify-content-around align-items-center">
      <div v-for="service in services" :key="service.id" class="service col-md-6">
        <service-component :service-name="service[0]" :service-price="service[1]" :service-description="service[2]" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ServiceComponent from "@/components/Service-Component.vue";

export default {
  name: 'Tarifs-View',
  components: {ServiceComponent},
  data() {
    return {
      services: []
    }
  },
  methods: {},

  mounted() {
    const requestServices = process.env.VUE_APP_STRAPI_URL + "/api/Prestations?fields[0]=nomPrestation&fields[1]=Tarif&fields[2]=Description"
    axios
        .get(requestServices)
        .then((response) => {
          let responseArray = Object.values(response.data)
          responseArray[0].forEach((item) => {
            const serviceName = item.attributes.nomPrestation
            const servicePrice = item.attributes.Tarif
            const serviceDescription = item.attributes.Description

            this.services.push([serviceName, servicePrice, serviceDescription])
            console.log(this.services)
          })
        }).catch(() => {
      alert('une erreur est survenu dans la récupération des données')
    })
  },
}
</script>

<style scoped>
.ratePage {

  color: papayawhip;
}
.logo{
margin: 15px;
  width: 30%;
  box-shadow: 12px 8px 115px 0px rgba(225,215,117,0.49);
  -webkit-box-shadow: 12px 8px 115px 0px rgba(225,215,117,0.49);
  -moz-box-shadow: 12px 8px 115px 0px rgba(225,215,117,0.49);
  margin-bottom: 50px;
}
@media (min-width:768px){
  .ratePage {
    height: 100vh;
  }
}
</style>