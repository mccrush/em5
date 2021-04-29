<template>
  <div id="container" class="container-fluid">
    <div class="row">
      <Header />
    </div>
    <div class="row"><Hellow /></div>
    <div class="row"><Calc /></div>
    <div class="row"><Footer /></div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header.vue'
import Hellow from '@/components/Hellow.vue'
import Calc from '@/components/Calc.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hellow,
    Calc,
    Footer
  }
}
</script>

<style>
#container {
  color: rgba(31, 31, 33, 0.87);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.container-640 {
  max-width: 640px;
}

.btn:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  border-color: #6c757d !important;
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  color: #212529;
  background-color: #f8f9fa;
}

.cursor-def {
  cursor: default;
}

.cursor-point {
  cursor: pointer;
}

.fw-500 {
  font-weight: 600;
}
</style>
