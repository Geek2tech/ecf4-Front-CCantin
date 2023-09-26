

<template>
<div class="contactPage">


  <!-- Formulaire de contact via formSpree.io -->

<div class="form container centered d-flex flex-column justify-content-center">
<div class="col">
  <h1 >Contact</h1>

</div>

  <form id="xgejnbdn" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xgejnbdn" method="post" class="d-flex flex-column ">

      <label for="full-name" class="form-label">Votre nom</label>
      <input type="text" name="Nom" id="full-name" placeholder="Michael Douglas" required="" class="form-text">
      <label for="email-address" class="form-label">Votre Adresse Email</label>
      <input type="email" name="Email du demandeur" id="email-address" placeholder="email@domain.tld" required="" class="form-text">
      <label for="message" class="form-label">Votre demande</label>
      <textarea rows="5" name=" Le message" id="message" placeholder="" required="" class="form-text"></textarea>
      <input type="hidden" name="_subject" id="email-subject" value="Demande d'information">
    <br>
    <input type="submit" value="Envoyer" class="btn  btn-success ">
  </form>



</div>

</div>
</template>

<script >


export default {
  name:'Contact-View',
  components: {},
  data(){
    return {


    }
  },
}

</script>

<style scoped>

.contactPage{
  height: 100vh;
}
.form{
  color:papayawhip;
 }
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

}
.form-text{
  font-size:1.5em;
  margin: 0;
  background-color: darkseagreen;
  color: papayawhip;

}
.form-label{
  font-size: 1.8em;
  margin: 0;
  background-color: green;
}
h1{
  margin-bottom: 50px;
}
.h1{
  color:white;
  margin:25px;
}


</style>