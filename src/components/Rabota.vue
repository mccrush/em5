<template>
  <tr>
    <td class="text-start ps-2" vertical-align="baseline">
      <span class="d-none d-sm-block">{{ rabotaFrom.title }}</span>
      <small class="d-sm-none">{{ rabotaFrom.title }}</small>
    </td>
    <td>{{ rabotaFrom.price }}</td>
    <td width="10%">
      <input
        v-if="rabotaFrom.id !== 2"
        class="form-control form-control-sm"
        type="number"
        placeholder="1"
        step="1"
        min="1"
        max="99"
        v-on:input="comput"
        v-model.number="counter"
      />
    </td>
    <td>
      <div
        class="btn-group btn-group-sm"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          class="btn btn-light"
          v-bind:class="[
            isActive ? '' : 'active',
            isActive ? 'btn-light' : 'btn-light'
          ]"
          v-on:click="abortRaboty"
        >
          Нет
        </button>
        <button
          type="button"
          class="btn"
          v-bind:class="[
            isActive ? 'active' : '',
            isActive ? 'btn-success' : 'btn-light'
          ]"
          v-on:click="selectRaboty"
        >
          Да&nbsp;
        </button>
      </div>
    </td>
    <td v-if="showSumm">{{ summa.toLocaleString() }}</td>
    <td v-else>&nbsp;</td>
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
      summa: this.rabotaFrom.price,
      counter: 1,
      price: this.rabotaFrom.price,
      isActive: this.rabotaFrom.active,
      showSumm: false,
      abort: false
    }
  },
  methods: {
    comput: function () {
      // let summa = this.counter * this.price - (this.price / 4) * (this.counter - 1)

      // summa = Math.ceil(summa)

      // let ostatok = summa % 10

      // summa = summa - ostatok

      // ostatok = ostatok > 5 ? 10 : 0
      // summa = summa + ostatok
      // this.summa = summa

      this.summa = this.counter * this.price

      if (this.isActive) this.$emit('add-summ', this.summa, this.rabotaFrom.id)
      this.abort = true
    },
    selectRaboty: function () {
      this.showSumm = true
      this.isActive = true
      this.$emit('add-summ', this.summa, this.rabotaFrom.id)
      this.abort = true
    },
    abortRaboty: function () {
      this.showSumm = false
      this.isActive = false
      if (this.abort) {
        this.$emit('remove-summ', this.summa, this.rabotaFrom.id)
        this.abort = false
      }
    }
  }
}
</script>
<style scoped>
.table td,
.table th {
  vertical-align: middle;
}
</style>
