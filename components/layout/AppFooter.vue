<template>
  <div class="footer">
    <div class="footer__inner">
<!--      <contacts-icons color="white"/>-->
      <p class="footer__text">ShashkaV recruitment</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
  .footer{
    padding: 20px 0;
    background-color: #000000;
    bottom: 0;
    width: 100%;
  }
  .footer__inner{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .footer__text{
    color: #ffffff;
  }
</style>
