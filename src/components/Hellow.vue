<template>
  <div id="hello" class="border-bottom">

    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">«ЭМ5 электрик»</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Hellow',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  color: rgba(255, 255, 255, 0.87);
  background-color: #3e2723;
  /*background-image: url('../assets/bg2.png');*/
}
.pricing-header {
  max-width: 700px;
}
</style>
