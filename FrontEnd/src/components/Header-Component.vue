<template>
  <nav class="navbar justify-content-center justify-content-md-between">
    <!-- Logo et titre de la navBar -->

    <div class="logo header navbar-brand">
      <img src="../../public/Assets/Img/Logo.png" alt="logo" class="d-inline-block align-center">
      <span id="texteLogo"><strong>Charles Cantin</strong></span>
    </div>

    <!-- Lien de la navBar -->

    <div class="HeaderLink">
      <router-link to="/">Acceuil</router-link>
      <router-link to="/galerie">Galerie</router-link>
      <router-link to="/tarifs">Prestation</router-link>
      <router-link to="/contact">Contact</router-link>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header-component',
  components: {},

}
</script>
<style scoped>
nav {
  display: flex;

  background-color: transparent;

}

nav img {
  width: 50px;
}

.HeaderLink {
  padding: 10px;
}

.HeaderLink a {
  padding: 10px;
  text-decoration: none;
  color:papayawhip;
}

.HeaderLink a:hover {
  font-size: 1.05em;
  color: darkgreen;
  background-color: bisque;
  border-radius: 15px;
  transition-duration: 0.5s;

}
#texteLogo{
  color:papayawhip;
  padding: 10px;

}
</style>