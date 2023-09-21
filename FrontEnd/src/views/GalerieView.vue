<template>
  <div class="GaleryPage container">
    <h1>Galerie</h1>
    <div class="row">

      <div class="dropdown">
        <button class="btn btn-outline-success btn-lg dropdown-toggle"
                type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          Filtrer les photos
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="categorie in categories" :key="categorie.id">
            <button class="dropdown-item">{{ categorie }}</button>
          </li>


        </ul>
      </div>
    </div>
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

      photos: [],
      categories: []
    }

  },
  mounted() {
    const requetePhoto = 'http://localhost:1337/api/photos?fields[0]=Description&populate[Photo][fields][0]=url&populate[categorie][fields][1]=categoryName'
    axios
        .get(requetePhoto)
        .then((response) => {
          let responseArray = Object.values(response.data)

          responseArray[0].forEach((item) => {

            const url = process.env.VUE_APP_STRAPI_URL + item.attributes.Photo.data.attributes.url
            const categorie = item.attributes.categorie.data.attributes.categoryName
            const description = item.attributes.Description
            this.photos.push([categorie, url, description])
          })
        })
        .catch(()=>{
          alert('une erreur est survenu dans la récupération des données')
        })
    const requeteCategory = 'http://localhost:1337/api/categories?fields[0]=categoryName'
    axios
        .get(requeteCategory)
        .then((response) => {
          let responseArray = Object.values(response.data)
          responseArray[0].forEach((item) => {
            const categoryName = item.attributes.categoryName
            this.categories.push(categoryName)
            })
        })
        .catch(()=>{
          alert('une erreur est survenu dans la récupération des données')
        })

  },

}


</script>

<style scoped>
div {
  color: white;
}

li {
  color: white;
}

</style>