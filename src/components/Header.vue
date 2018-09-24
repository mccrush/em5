<template>
  <div id="header shadow-sm">

    <div class="d-flex flex-column pricing-header flex-md-row  mx-auto align-items-center p-3 px-md-4 bg-whit">
      <img class="my-0 mr-md-auto" alt="Vue logo" src="../assets/logo.png" height="24">
      <h5 class="my-0 ml-md-auto lead">8 906 940 4069</h5>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.material-icons {
  font-size: 18px;
}

.pricing-header {
  max-width: 700px;
}
</style>
