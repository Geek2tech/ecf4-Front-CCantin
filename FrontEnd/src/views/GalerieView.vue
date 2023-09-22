<template>
  <div class="galeryPage container">
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
          <li>
            <button class="dropdown-item" value="all"  :onclick=photoFilter>Toutes</button>
          </li>
          <li v-for="categorie in categories" :key="categorie.id">
            <button class="dropdown-item" :value=categorie :onclick=photoFilter>{{ categorie }}</button>
          </li>


        </ul>
      </div>
    </div>
    <div class="photoContainer row d-flex flex-wrap justify-content-around align-items-baseline">
      <div v-for="photo in photos" :key="photo.id" class="col-lg-4 col-sm-6  p-3 photoCompo" :class=photo[0]>
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
  methods: {

    displayPhoto(liste){
      for (let i=0 ; i < liste.length; i++){
        liste[i].classList.remove('hide')
      }
    },
    hidePhoto(liste){
      for ( let i=0 ; i < liste.length;i++){
        liste[i].classList.add('hide')
      }
    },
    photoFilter(event) {
      const filteredCategrie = event.target.value
      const allPhotos = document.getElementsByClassName('photoCompo')
      const photoToShow = document.getElementsByClassName(filteredCategrie)

      if (filteredCategrie === 'all'){
      this.displayPhoto(allPhotos)
      }
      else{
        this.hidePhoto(allPhotos)
        this.displayPhoto(photoToShow)
      }


    }

  },
  mounted() {
    const requetePhoto = process.env.VUE_APP_STRAPI_URL + '/api/photos?fields[0]=Description&populate[Photo][fields][0]=url&populate[categorie][fields][1]=categoryName'
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
        .catch(() => {
          alert('une erreur est survenu dans la récupération des données')
        })


    const requeteCategory = process.env.VUE_APP_STRAPI_URL +'/api/categories?fields[0]=categoryName'
    axios
        .get(requeteCategory)
        .then((response) => {
          let responseArray = Object.values(response.data)
          responseArray[0].forEach((item) => {
            const categoryName = item.attributes.categoryName
            this.categories.push(categoryName)
          })
        })
        .catch(() => {
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

.hide {
  display: none;

}
.galeryPage{
  min-height: calc(100vh - 80px);
}


</style>
