<template>
  <div id="calc" class="border-bottom pt-3 pb-3">
    
    <div class="container">
        <table class="table table-striped table-borderless table-sm table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Вид работ</th>
              <th scope="col"><abbr title="Стоимость работы">Стоим</abbr></th>
              <th scope="col"><abbr title="Количество">Колич</abbr></th>
              <th scope="col">Выбор</th>
              <th scope="col">Сумма</th>
            </tr>
          </thead>
          <tbody>
            <Rabota v-for="rabota in listRabot" :key="rabota.id" :rabotaFrom="rabota"/>
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
import { loadList } from '../core/raboty.js';
import { eventEmitter } from '../main.js';
import Rabota from './Rabota.vue';

export default {
  name: 'Calc',
  props: {
    msg: String
  },
  components: {
    Rabota
  },
  data: function() {
    return {
      listRabot: loadList(),
      arraySumm: [],
      totalSumma: '0'
    };
  },
  created() {
    eventEmitter.$on('change-summ', (summFrom, id) => {
      console.log('summFrom = ' + summFrom, 'id = ', id);
      this.arraySumm[id] = summFrom;
      console.log(this.arraySumm);
      let totSum = 0;
      this.arraySumm.forEach(function(item) {
        totSum = totSum + +item;
        console.log('Itogo = ', totSum);
        //this.totalSumm = this.totalSumm + item;
      });
      this.totalSumma = totSum;
      console.log('totalSumma = ', this.totalSumma);
      // document.getElementById('inpitLink').classList.remove('is-invalid');
      // this.id = linkFrom.id;
      // this.href = linkFrom.href;
      // this.title = linkFrom.title;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 700px; /* 960px; */
}
</style>
