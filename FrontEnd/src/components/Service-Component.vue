<template>
<div class="service card ">
  <h2 class="serviceName card-header">{{ serviceName }}</h2>
  <p class="serviceDescription card-body">{{ serviceDescription }}</p>
  <p class="servicePrice card-footer">{{ servicePrice }}</p>
</div>
</template>

<script >
export default {
  name:"Service-Component",
  props:['serviceName','servicePrice','serviceDescription']

}
</script>
<style scoped>
.service{

  margin: 5px;
}
.card-header , .card-footer{
  background-color: darkseagreen;
}
.card-body{
  background-color: green;
  margin: 0;
}
.card-footer{
  font-weight: bold;
  margin:0;
}
.card {
  transition: all 0.7s ease-in-out;
}
.card:hover {
  z-index: 9;
  transition: all 0.7s ease-in-out;
  transform: scale(120%);
  border: 2px solid papayawhip;
  -webkit-box-shadow: 5px 5px 48px 29px #000000;
  box-shadow: 5px 5px 48px 29px #000000;
}
@media  (max-width:650px) {
  .card:hover {
transform: scale(100%);
  }
  }
</style>