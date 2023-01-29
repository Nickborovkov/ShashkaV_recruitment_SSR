<template>
  <div class="appBanner">
    <div class="appBanner__fancy">Карьерное консультирование и коучинг</div>
  </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
  .appBanner {
    width: 800px;
    margin: 0 auto;
  }

  .appBanner__fancy {
    text-align: center;
    font-size: 80px;
    font-family: 'French Kiss';
    color: #555555;
    padding-top: 30px;
  }

  @media screen and (max-width: 1024px){
    .appBanner {
      width: 700px;
    }
    .appBanner__fancy {
      font-size: 70px;
      padding-top: 30px;
    }
  }

  @media screen and (max-width: 768px){
    .appBanner {
      width: 450px;
    }
    .appBanner__fancy {
      font-size: 45px;
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 425px){
    .appBanner {
      width: 300px;
    }
    .appBanner__fancy {
      font-size: 30px;
    }
  }
</style>
