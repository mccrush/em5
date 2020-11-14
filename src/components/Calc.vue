<template>
  <div id="calc" class="pt-3 pb-3">
    <div class="container">
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
            <td class="text-left pl-2" vertical-align="baseline">
              <span class="d-none d-sm-block">Вызов электрика</span>
              <small class="d-sm-none">Вызов электрика</small>
            </td>
            <td>50</td>
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
            <td>50</td>
          </tr>

          <Rabota
            v-for="rabota in listRabot"
            :key="rabota.id"
            :rabotaFrom="rabota"
            @add-summ="addSumm"
            @remove-summ="removeSumm"
          />
          <tr>
            <td colspan="4" class="text-right"><strong>Итого:</strong></td>
            <td>{{ totalSumma }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { loadList } from '../core/raboty.js'
import Rabota from './Rabota.vue'

export default {
  name: 'Calc',
  components: {
    Rabota,
  },
  data: function () {
    return {
      listRabot: loadList(),
      arraySumm: [],
      totalSumma: '50',
    }
  },
  methods: {
    addSumm(summFrom, id) {
      this.arraySumm[id] = summFrom
      let totSum = 50
      this.arraySumm.forEach(function (item) {
        totSum = totSum + +item
      })
      this.totalSumma = totSum
    },
    removeSumm(summFrom, id) {
      this.arraySumm[id] = 0
      this.totalSumma = this.totalSumma - summFrom
    },
  },
}
</script>
<style scoped>
.container {
  max-width: 700px; /* 960px; */
}

.table td,
.table th {
  vertical-align: middle;
}
</style>
