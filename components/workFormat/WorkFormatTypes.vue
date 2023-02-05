<template>
  <div>
    <work-format-type-section title="Карьерное консультирование" subtitle="онлайн-сессии 60 - 90 минут" :work-format-items="items.career"/>
    <work-format-type-section title="Коучинг" subtitle="онлайн-сессия 60 минут" :work-format-items="items.coach"/>
  </div>
</template>

<script>
  import WorkFormatTypeSection from "./WorkFormatTypeSection";
  import {workFormatItems} from "../../helpers/textValues";

  export default {
    name: "WorkFormatType",
    components: {WorkFormatTypeSection},
    component: {WorkFormatTypeSection},
    data() {
      return {
        items: workFormatItems
      }
    }
  }
</script>
