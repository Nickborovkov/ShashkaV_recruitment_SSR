<template>
    <div style="display: flex; padding-bottom: 50px;">
      <div style="width: 60%; padding: 100px 150px 0px 40px; box-sizing: border-box">
        <h3 style="font-size: 30px; padding-bottom: 30px; color: #555555">
          Добрый день, <br>
          давайте знакомиться!
        </h3>
        <h3 style="font-size: 25px; padding-bottom: 60px; color: #555555">
          Меня зовут <span style="color: #d39999">Шашина Виктория</span>, я профессиональный коуч и <br>
          карьерный консультант
        </h3>
        <h4 style="text-align: right; padding-bottom: 40px; color: #d39999; font-size: 18px; font-weight: normal">
          Я точно знаю, что каждый человек имеет <br>
          огромный потенциал для реализации <br>
          всех своих возможностей <br>
          и профессиональных запросов
        </h4>
        <h5 style="text-align: right;padding-bottom: 20px; color: #999999; font-weight: normal; font-size: 18px">
          Буду рада встретиться с Вами на консультации.
        </h5>
        <h5 style="text-align: right; padding-bottom: 60px; color: #999999; font-weight: normal; font-size: 18px">
          Провожу встречи как очно, так и онлайн.
        </h5>
        <h5 style="color: #c2b599; font-weight: normal; font-size: 18px">
          С заботой о Вашем будущем и Вашей карьере ❤️
        </h5>
      </div>
      <div class="photo__Container">
        <img class="photo" src="@/assets/images/photos/main_avatar.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Greetings"
    }
</script>

<style scoped>
  .personalInfo {
    display: flex;
    justify-content: space-between;
  }
  .photo__Container {
    width: 40%;
  }

  .photo {
    display: block;
    margin: auto;
    width: 100%;
  }
</style>
