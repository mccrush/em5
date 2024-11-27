<template>
  <div class="col-12 p-0">
    <nav class="navbar bg-light">
      <div class="container-640 container-lg ps-0 pe-0">
        <div
          class="cursor-def d-sm-none navbar-brand text-center fw-500 w-100 me-0"
        >
          «ЭМ5 электрик»
        </div>

        <div class="cursor-def d-none d-sm-block navbar-brand">
          <img
            src="/img/icons/icon_32.png"
            width="32"
            height="32"
            alt="Logo ЭМ5 электрик"
            class="ms-3 ms-md-0 mb-0 me-2"
          />
          <span class="fw-500">«ЭМ5 электрик»</span>
        </div>

        <div class="d-sm-none d-flex justify-content-center w-100 mb-1">
          <div
            class="text-end d-flex align-items-center me-2"
            title="Пишите нам в WhatsApp"
          >
            <Whatsapp /><span class="cursor-def lead fw-500 ms-2"
              >8 906 940 4069</span
            >
          </div>
        </div>

        <div class="d-none d-sm-flex justify-content-between">
          <div
            class="text-end d-flex align-items-center pt-2 me-3 me-md-0"
            title="Пишите нам в WhatsApp"
          >
            <Whatsapp />
            <span class="cursor-def lead fw-500 ms-2">8 906 940 4069</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Whatsapp from './icons/Whatsapp.vue'

export default {
  components: { Whatsapp }
}
</script>
