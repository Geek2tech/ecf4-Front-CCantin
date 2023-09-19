<template>
  <nav>
    <div class="logo header">
      <img src="../../public/Logo.png" alt="logo">
    </div>
    <div class="HeaderLink">
      <router-link to="/">Acceuil</router-link>
      <router-link to="/galerie">Galerie</router-link>
      <router-link to="/tarifs">Tarifs et prestation</router-link>
      <router-link to="/contact">Contact</router-link>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header-component',
  components: {}
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: beige;
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
  color:beige;
}

.HeaderLink a:hover {
  font-size: 1.05em;
  color: green;
  background-color: bisque;
  border-radius: 15px;
  transition-duration: 0.5s;

}
</style>