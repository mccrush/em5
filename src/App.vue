<template>
  <div id="app">
    <Header />
    <Hellow />
    <Calc />
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.vue'
import Hellow from './components/Hellow.vue'
import Calc from './components/Calc.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hellow,
    Calc,
    Footer,
  },
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
