<template>
  <div id="footer">
    <div class="container">
      <footer class="pt-4 mx-auto">
        <div class="row">
          <div class="col-12 col-sm-5 border-right text-left">
            <!-- <img class="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"> -->
            <small class="d-block mb-3"
              >* Предложение не является публичной офертой!<br /><br />
              ** Каждая следующая
              <abbr title="Замена розетки, выключателя и т.д.">точка</abbr> на
              25% дешевле суммы предыдущих.
            </small>
          </div>
          <div class="col-6 col-sm-3 border-right text-left">
            <h6>Режим работы</h6>
            <ul class="list-unstyled mb-0">
              <li><small>Вт: 10:00 - 20:00</small></li>
              <li><small>Ср: 10:00 - 20:00</small></li>
              <li><small>Чт: 10:00 - 20:00</small></li>
              <li><small>Пт: 10:00 - 20:00</small></li>
            </ul>
          </div>
          <div class="col-6 col-sm-4 text-left">
            <h6>Контакты</h6>
            <ul class="list-unstyled mb-0">
              <li class="d-flex align-items-center">
                WA
                <a class="text-white-50 ml-2" href="tel:+79069404069"
                  >+7 906 940-40-69</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="material-icons">language</i>
                <a
                  class="text-white-50 ml-2"
                  href="https://mccrush.github.io/em5/"
                  target="_self"
                  >mccrush.github.io/em5</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="material-icons">open_in_new</i>
                <a
                  class="text-white-50 ml-2"
                  href="http://vk.com/em5electric"
                  target="_blank"
                  >vk.com/em5electric</a
                >
              </li>
              <!-- <li class="d-flex align-items-center">
                <i class="material-icons">mail_outline</i
                ><a
                  class="text-white-50 ml-2"
                  href="mailto:support@em5electric.ru?subject=Вопрос электрику"
                  ><small>support@em5electric.ru</small></a
                >
              </li> -->
              <li class="d-flex align-items-center">
                <i class="material-icons">location_on</i
                ><span class="text-white-50 ml-2">г. Славгород</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <small class="d-block mb-3 mt-4"
              >2014 - 2020 © «ЭМ5 электрик»</small
            >
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
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 700px;
}

#footer {
  color: rgba(255, 255, 255, 0.87);
  background-color: #3e2723;
  /*background-image: url('../assets/bg2.png');*/
}

.material-icons {
  font-size: 18px;
}

.text-white-50 {
  text-decoration: none;
}

.text-white-50:hover {
  color: rgba(255, 255, 255, 0.87) !important;
}
</style>
