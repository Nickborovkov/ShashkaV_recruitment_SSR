<template>
  <div>

    <banner/>

    <div style="width: 100%; height: 1px; background-color: #cccccc; margin: 50px 0;"></div>

    <greetings/>

    <div style="display: flex; justify-content: space-evenly; margin: 60px 0">
      <perk-card perk="3+" description="Лет стажа"/>
      <perk-card perk="320+" description="Часов практики"/>
      <perk-card perk="ICI" description="Организация"/>
      <perk-card perk="Coach" description="Сертификация"/>
    </div>

    <div style="padding: 40px 0">
      <h3 style="font-weight: 400; text-align: center; color: #999999">
        У каждого из Вас огромный потенциал для реализации всех Ваших возможностей, <br> а я могу помочь его раскрыть:)
      </h3>
    </div>


    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 1000px; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">C чем я могу
        Вам помочь</h3>
      <div class="line"></div>
    </div>

        <div style="margin: 30px 0;">
          <hint-chip v-for="tag in tags" :key="tag.id" :tag="tag.name" />
        </div>


    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 1500px; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">Записаться на
        консультацию</h3>
      <div class="line"></div>
    </div>

    <div>
      <h3 style="color: #999999; font-size: 20px; font-weight: 400;">
        Я точно знаю, что каждый человек имеет огромный потенциал для реализации всех своих возможностей. профессиональных
        запросов .
      </h3>
      <h3 style="color: #999999; text-align: right; margin-top: 30px; font-weight: 300;">
        Буду рада встретиться с Вами на консультации. Провожу встречи как очно, так и онлайн.
      </h3>
      <div style="display: flex; justify-content:center; margin: 40px 0">
        <button
          style="background-color: #d39999; color: white; padding: 10px; border: none; font-size: 20px;">
          Записаться на консультацию
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Greetings from "../components/main/Greetings";
  import Banner from "../components/main/Banner";
  import PerkCard from "../UI/elements/PerkCard";
  import HintChip from "../UI/elements/HintChip";

  export default {
    name: 'IndexPage',
    components: {Banner, Greetings, PerkCard, HintChip},
    layout: 'BasePageLayout',
    data() {
      return {
        tags: [
          {id: 0, name: 'Карьерный коучинг'},
          {id: 1, name: 'Лайф-коучинг'},
          {id: 2, name: 'Выгорание'},
          {id: 3, name: 'Горизонт планирования'},
          {id: 4, name: 'Качество жизни'},
          {id: 5, name: 'Успех'},
          {id: 6, name: 'Отношения'},
          {id: 7, name: 'Коучинг личной эффективности'},
          {id: 8, name: 'Личностный рост'},
          {id: 9, name: 'Мотивация'},
          {id: 10, name: 'Ограничивающие убеждения'},
          {id: 11, name: 'Осознанность'},
          {id: 12, name: 'Планирование'},
          {id: 13, name: 'Принятие решения'},
          {id: 14, name: 'Коуч-сессия'},
          {id: 15, name: 'Цель'},
          {id: 16, name: 'Синдром самозванца'},
          {id: 17, name: 'Переходные периоды'},
          {id: 18, name: 'Кризисные ситуации'},
          {id: 19, name: 'Саморазвитие'},
        ]
      }
    },
  }
</script>

<style scoped>
  .line {
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
</style>
