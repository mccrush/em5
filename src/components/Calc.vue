<template>
  <div id="calc" class="border-bottom pt-3 зи-3">
    
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
              <td> Sum </td>
            </tr>
          </tbody>
        </table>
        
    </div> 

  </div>
</template>

<script>
import { loadList } from '../core/raboty.js';
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
      listRabot: loadList()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 700px; /* 960px; */
}
</style>
