<template>
  <tr>
    <td class="text-left pl-2">{{ rabotaFrom.title }}</td>
    <td>{{ rabotaFrom.price }}</td>
    <td width="10%"><input v-if="rabotaFrom.id !== 1 && rabotaFrom.id !== 2" class="form-control form-control-sm" type="number" placeholder="1" step="1" min="0" max="99" v-on:input="comput" v-model.number="counter"></td>
    <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary active">Нет</button>
        <button type="button" class="btn btn-secondary">Да&nbsp;</button>
      </div>
    </td>
    <td>{{ summa }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Rabota',
  props: {
    rabotaFrom: Object
  },
  data() {
    return {
      summa: 0,
      counter: 0,
      price: this.rabotaFrom.price
    };
  },
  created() {
    //console.log('in Beforcreated rabotaFrom.price;: ', rabotaFrom.price);
    //this.price = rabotaFrom.price;
  },
  methods: {
    comput: function() {
      this.summa = this.counter * this.price - 50 * (this.counter - 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
