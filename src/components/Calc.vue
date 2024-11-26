<template>
  <div class="col-12">
    <div class="container-640 m-auto pt-4 pb-3">
      <table
        class="table table-striped table-borderless table-sm table-responsive-sm"
      >
        <thead>
          <tr>
            <th scope="col">Вид работ*</th>
            <th scope="col"><abbr title="Стоимость работы">Стоим.</abbr></th>
            <th scope="col"><abbr title="Количество">Кол.**</abbr></th>
            <th scope="col">Выбор</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-start ps-2" vertical-align="baseline">
              <span class="d-none d-sm-block">Вызов мастера**</span>
              <small class="d-sm-none">Вызов мастера**</small>
            </td>
            <td>{{ minSumma }}</td>
            <td width="10%"></td>
            <td>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-light disabled">
                  Нет
                </button>
                <button type="button" class="btn btn-success active disabled">
                  Да&nbsp;
                </button>
              </div>
            </td>
            <td>{{ minSumma }}</td>
          </tr>

          <Rabota
            v-for="rabota in listRabot"
            :key="rabota.id"
            :rabotaFrom="rabota"
            @add-summ="addSumm"
            @remove-summ="removeSumm"
          />
          <tr>
            <td colspan="4" class="text-end"><strong>Итого:</strong></td>
            <td>{{ totalSumma.toLocaleString() }} ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { loadList } from './../core/raboty.js'
import Rabota from './Rabota.vue'

export default {
  name: 'Calc',
  components: {
    Rabota
  },
  data: function () {
    return {
      minSumma: 500,
      listRabot: loadList(),
      arraySumm: [],
      totalSumma: 500
    }
  },
  methods: {
    calcSumm() {
      let totSum = 0
      this.arraySumm.forEach(function (item) {
        totSum = totSum + +item
      })
      if (totSum < this.minSumma) {
        this.totalSumma = this.minSumma
      } else {
        this.totalSumma = totSum
      }
    },
    addSumm(summFrom, id) {
      this.arraySumm[id] = summFrom
      this.calcSumm()
    },
    removeSumm(summFrom, id) {
      this.arraySumm[id] = 0
      this.calcSumm()
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
