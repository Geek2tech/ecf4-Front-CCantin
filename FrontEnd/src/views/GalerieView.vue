<template>
  <div class="GaleryPage container">
<h1>Galerie</h1>
<div class="photoContainer row d-flex flex-wrap justify-content-around align-items-baseline">
<div v-for="photo in photos" :key="photo.id" class="col-lg-4 col-sm-6  p-3">
   <PhotoComponent :categorie="photo[0]" :url="photo[1]" :description=photo[2] />
</div>

</div>
  </div>

</template>

<script>
import PhotoComponent from "@/components/Photo-Component.vue";

import axios from 'axios'




export default {
  name: 'Galerie-View',
  components: {PhotoComponent},

  data() {
    return {

      photos: []
    }

  },
  mounted() {
    const requete = 'http://localhost:1337/api/photos?fields[0]=Description&populate[Photo][fields][0]=url&populate[categorie][fields][1]=categoryName'
    axios
        .get(requete)
        .then((response) => {
          let responseArray = Object.values(response.data)

          responseArray[0].forEach((item) => {

            const url = process.env.VUE_APP_STRAPI_URL + item.attributes.Photo.data.attributes.url
            const categorie = item.attributes.categorie.data.attributes.categoryName
            const description = item.attributes.Description
            console.log(url)
            console.log(categorie)
            this.photos.push([categorie,url,description])


          })
          console.log(this.photos)
          console.log(this.photos[2][0])
          console.log(this.photos[2][1])


        })
  },

}


</script>

<style scoped>
div{
  color:white;
}
li{
  color:white;
}

</style>