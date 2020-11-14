<template>
  <div id="hello" class="">
    <div class="pricing-header px-3 py-3 pt-5 pb-5 mx-auto text-center">
      <!-- <h1 class="display-4">«ЭМ5 электрик»</h1> -->
      <img
        class="my-0 mr-md-auto mt-1 mb-3"
        alt="Vue logo"
        src="../assets/logo.png"
        height="150"
      />
      <p class="lead mt-2 mb-0">
        Чиним и ремонтируем ⚡ г.&nbsp;Славгород<br />Мелкосрочный ремонт
        бытовых электроприборов
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hellow',
  props: {
    msg: String,
  },
}
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
