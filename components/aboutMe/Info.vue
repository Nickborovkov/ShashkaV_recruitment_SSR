<template>
  <div class="description">
    <h3 class="description__name">Шашина Виктория</h3>
    <ul class="description__perks">
      <li>
        <div class="description__perks__item">Сертифицированный ICI коуч <br> и карьерный консультант</div>
      </li>
      <li>
        <div class="description__perks__item">Team Lead IT-Recruiter</div>
      </li>
      <li>
        <div class="description__perks__item">Ментор сообщества PROwomen</div>
      </li>
      <li>
        <div class="description__perks__item">Соавтор образовательных онлайн-интенсивов <br> и контента для карьерных площадок</div>
      </li>
      <li>
        <div class="description__perks__item">Наставник яндекс практикума</div>
      </li>
    </ul>
    <div class="description__info">
      <div class="description__info__inner">
        Имею высшее психологическое образование, являюсь членом международной
        федерации коучинга. Регулярно принимаю участие в групповых супервизиях для
        прорабавыния коуч сессий, направленных на решение лайф-запросов.
      </div>
    </div>
    <div class="description__info">
      <div class="description__info__inner">
        На данный момент занимаю должность Team Lead IT-Recruiter в одном из лучших
        кадровых агентств России. В мои обязанности входит полный цикл подбора
        IT-специалистов.
      </div>
      <div class="description__info__inner">
        Работаю с большим портфелем вакансий от junior специалистов до
        топ-менеджмента. Экспертиза, накопленная за время работы в сфере HR и рекрутинге
        позволяет мне брать в работу самые разные карьерные запросы.
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .description{
    width: 60%;
    &__name {
      font-size: 50px;
      padding-bottom: 10px;
      color: $accent-middle-grey;
    }
    &__perks {
      width: 600px;
      margin-left: 10px;
      color: $base-olive-green;
      font-size: 30px;
      &__item{
        color: $accent-middle-grey;
        font-size: 25px;
        margin: 20px 0;
      }
    }
    &__info {
      padding: 40px 0;
      text-align: right;
      color: $accent-middle-grey;
      &__inner {
        font-size: 20px;
        width: 500px;
        margin: 60px auto 0 auto;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1024px){
    .description{
      &__name {
        font-size: 35px;
      }
      &__perks {
        &__item {
          font-size: 16px;
        }
      }
      &__info {
        margin-left: 100px;
        width: 100%;
        &__inner {
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .description{
      &__name {
        text-align: center;
        font-size: 35px;
      }
      &__perks {
        width: 300px;
        display: block;
        margin: auto;
        &__item {
          margin-left: 10px;
          font-size: 14px;
        }
      }
      &__info {
        margin: 30px auto;
        width: 95%;
        text-align: center;
        &__inner {
          margin: 40px 0;
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }
</style>
