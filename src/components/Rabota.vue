<template>
  <tr>
    <td class="text-left pl-3">{{ rabotaFrom.title }}</td>
    <td>{{ rabotaFrom.price }}</td>
    <td>1</td>
    <td>On</td>
    <td>00</td>
  </tr>
</template>

<script>
export default {
  name: 'Rabota',
  props: {
    rabotaFrom: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
