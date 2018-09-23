<template>
  <div id="footer">
    
    <div class="container">  
      <footer class="pt-4">
        <div class="row">
           <div class="col-12 col-sm-4 border-right text-left">
            <!-- <img class="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"> -->
            <small class="d-block mb-3">* Предложение не является публичной офертой!<br>
            ** При заказе работ, консультация осуществляется бесплатно.<br>
            *** Каждая следующая точка на 50 рублей дешевле суммы предыдущих.
            </small>
          </div>
          <div class="col-6 col-sm-4 border-right text-left">
            <h5>Режим работы</h5>
            <ul class="list-unstyled">
              <li><small>Вт: 9:00 - 18:00</small></li>
              <li><small>Ср: 9:00 - 18:00</small></li>
              <li><small>Чт: 9:00 - 18:00</small></li>
              <li><small>Пт: 9:00 - 18:00</small></li>
              <li><small>Сб: 10:00 - 15:00</small></li>
            </ul>
          </div>
          <div class="col-6 col-sm-4 text-left">
            <h5>Контакты</h5>
            <ul class="list-unstyled">
              <li class="d-flex align-items-center"><i class="material-icons">phone</i><a class="text-white-50 ml-2" href="tel:+79069404069">8 906 940 4069</a></li>
              <li class="d-flex align-items-center"><i class="material-icons">language</i> <a class="text-white-50 ml-2" href="http://em5electric.ru" target="_self">em5electric.ru</a></li>
              <li class="d-flex align-items-center"><i class="material-icons">open_in_new</i> <a class="text-white-50 ml-2" href="http://vk.com/em5electric" target="_blank">vk.com/em5electric</a></li>
              <li class="d-flex align-items-center"><i class="material-icons">mail_outline</i><a class="text-white-50 ml-2" href="mailto:support@em5electric.ru?subject=Вопрос электрику"><small>support@em5electric.ru</small></a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <small class="d-block mb-3 mt-4">2018 © «ЭМ5 электрик»</small>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}

#footer {
  color: rgba(255, 255, 255, 0.87);
  background-color: #3e2723;
  /*background-image: url('../assets/bg2.png');*/
}

.material-icons {
  font-size: 20px;
}
</style>
