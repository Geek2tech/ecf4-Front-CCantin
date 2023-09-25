<template>
  <footer class=" align-items-baseline  d-flex justify-content-center bg-transparent">

    <!-- Icones des réseaux sociaux , ils affichent la modal -->

    <button type="button" class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#infoModal">
      <img class=" socialLogo img-fluid " src="../../public/Assets/Img/facebook.svg" alt="logo facebook">
    </button>
    <button type="button" class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#infoModal">
      <img class=" socialLogo img-fluid  " src="../../public/Assets/Img/instagram.svg" alt="logo facebook">
    </button>


    <!-- Modal pour informer qu'il s'agit d'un site de démonstration -->
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="infoModalLabel">Attention</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Ceci est un site de démonstration
            réalisé dans le cadre d'une formation
            toutes les informations sont fictives
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


  </footer>
</template>

<script>
export default {
  name: 'Footer-component',
  components: {}
}
</script>

<style scoped>
footer {
  height: 96px;
  margin-top: 20px;
}


</style>