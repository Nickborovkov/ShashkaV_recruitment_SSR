<template>
  <div class="appBanner">
    <h1 class="appBanner__fancy">Карьерное консультирование и коучинг</h1>
<!--    <p class="appBanner__plain">Карьерное консультирование и коучинг</p>-->
  </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
  .appBanner {
    width: 600px;
    margin: 0 auto;
    padding: 30px 0;
  }

  .appBanner__fancy {
    text-align: center;
    font-size: 70px;
    font-family: 'Oooh Baby', cursive;
    color: #555555;
  }

  .appBanner__plain {
    text-align: right;
    padding-top: 10px;
  }
</style>
