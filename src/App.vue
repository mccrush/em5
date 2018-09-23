<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header msg="Welcome to Header"/>
    <Hellow msg="Welcome to Hellow"/>
    <Calc msg="Welcome to Calc"/>
    <Footer msg="Welcome to Footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hellow from './components/Hellow.vue';
import Calc from './components/Calc.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Hellow,
    Calc,
    Footer
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
