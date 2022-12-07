<template>
  <div>
    <divider text="Обо мне"/>

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
        <img class="photo" src="@/assets/images/photos/avatar3_alt.jpg" alt="">
      </div>
    </div>

    <divider/>

    <div style="display: flex; padding-bottom: 50px;">
      <div class="photo__Container">
        <img class="photo" src="@/assets/images/photos/avatar4.jpg" alt="">
      </div>
      <div style="width: 60%; padding: 100px 40px 0px 150px; box-sizing: border-box">
        <h3 style="font-size: 18px; color: #d39999; padding-bottom: 30px;">В рамках карьерного коучинга и консультирования:</h3>
        <ul style="padding-left: 40px;">
          <li style="padding: 10px 0; color: #999999">Помогу с определением ваших дальнейших шагов для профессионального развития</li>
          <li style="padding: 10px 0; color: #999999">Расскажу с чего начать, если решили поменять профессию</li>
          <li style="padding: 10px 0; color: #999999">Помогу увидеть свои сильные и слабые стороны</li>
          <li style="padding: 10px 0; color: #999999">Составлю эффективное резюме</li>
          <li style="padding: 10px 0; color: #999999">Расскажу как успешно пройти собеседование.</li>
        </ul>

        <h3 style="font-size: 18px; color: #d39999; padding: 30px 0;">В рамках коуч сессий:</h3>
        <ul style="padding-left: 40px;">
          <li style="padding: 10px 0; color: #999999">помогу найти свои цели и пути их достижения, проработать широкий спектр личных и</li>
        </ul>
      </div>
    </div>

    <!--    <div style="width: 100%; height: 1px; background-color: #cccccc; margin-bottom: 50px;"></div>-->

    <!--    <div style="display: flex; padding-bottom: 50px;">-->
    <!--        <div style="width: 60%; padding: 100px 100px 0px 40px; box-sizing: border-box">-->
    <!--            <div style="display: flex; justify-content:center; flex-wrap: wrap">-->
    <!--                <div style="width: 280px; height: 150px; border-bottom: 1px solid #cccccc; border-right: 1px solid #cccccc;-->
    <!--                padding: 30px; box-sizing: border-box">-->
    <!--                    <p style="font-weight: bold; font-size: 40px; color: #d39999">4</p>-->
    <!--                    <p style="color: #999999">года помогаю людям находить работу их мечты</p>-->
    <!--                </div>-->
    <!--                <div style="width: 280px; height: 150px; border-bottom: 1px solid #cccccc; padding: 30px; box-sizing: border-box"></div>-->
    <!--                <div style="width: 280px; height: 150px; border-right: 1px solid #cccccc; padding: 30px; box-sizing: border-box">-->
    <!--                    <p style="font-weight: bold; font-size: 40px; color: #d39999">2</p>-->
    <!--                    <p style="color: #999999">проекта по карьерному консультированию</p>-->
    <!--                </div>-->
    <!--                <div style="width: 280px; height: 150px; padding: 30px; box-sizing: border-box">-->
    <!--                    <p style="font-weight: bold; font-size: 40px; color: #d39999">25</p>-->
    <!--                    <p style="color: #999999">лет люблю эту жизнь</p>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <div class="photo__Container">-->
    <!--            <img class="photo" src="@/assets/images/avatar/main_avatar.jpg" alt="">-->
    <!--        </div>-->
    <!--    </div>-->

    <divider text="Квалификация"/>

    <div>
      <div style="display: flex; justify-content:center; margin: auto; flex-wrap: wrap" >
        <div v-for="diploma in qualification" :key="diploma.id" style="width: 250px; margin: 10px;">
          <img
            style="width: 100%; display: block; margin: 10px;"
            :src="diploma.scan" alt="diploma_img"
          >
          <p style="text-align: center; color: #c2b599; font-weight: bold">{{diploma.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import scan from '@/assets/images/diplomas/diploma.jpg'
  import Divider from "../UI/elements/Divider";

  export default {
    name: "AboutMe",
    layout: 'BasePageLayout',
    components: { Divider },
    data() {
      return{
        qualification: [
          {id: 0, name: 'Описание диплома', scan: scan},
          {id: 1, name: 'Описание диплома', scan: scan},
          {id: 2, name: 'Описание диплома', scan: scan},
          {id: 3, name: 'Описание диплома', scan: scan},
          {id: 4, name: 'Описание диплома', scan: scan},
          {id: 5, name: 'Описание диплома', scan: scan},
        ]
      }
    }
  }
</script>

<style scoped>
  .line{
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
  .photo__Container{
    width: 40%;
  }
  .photo{
    display: block;
    margin: auto;
    width: 100%;
  }
</style>
