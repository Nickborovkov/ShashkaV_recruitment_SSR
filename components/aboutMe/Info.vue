<template>
  <div class="description">
    <h3 class="description__name">Шашина Виктория</h3>
    <div class="description__perks">
      <h5 class="description__perks__item">
        <span class="rose mdi mdi-check-all" />
        Сертифицированный ICI коуч и карьерный консультант
      </h5>
      <h5 class="description__perks__item">
        <span class="rose mdi mdi-check-all" />
        Team Lead IT-Recruiter
      </h5>
      <h5 class="description__perks__item">
        <span class="rose mdi mdi-check-all" />
        Ментор сообщества PROwomen
      </h5>
      <h5 class="description__perks__item">
        <span class="rose mdi mdi-check-all" />
        Автор образовательных онлайн-интенсивов и контента для карьерных площадок
      </h5>
      <h5 class="description__perks__item">
        <span class="rose mdi mdi-check-all" />
        Наставник яндекс практикума
      </h5>
    </div>
    <div class="description__info">
      <h3 class="description__info__inner">
        Имею высшее психологическое образование, являюсь членом международной
        федерации коучинга. Регулярно принимаю участие в групповых супервизиях для
        прорабавыния коуч сессий, направленных на решение лайф-запросов.
      </h3>
    </div>
    <div class="description__info">
      <h3 class="description__info__inner">
        На данный момент занимаю должность Team Lead IT-Recruiter в одном из лучших
        кадровых агентств России. В мои обязанности входит полный цикл подбора
        IT-специалистов.
      </h3>
      <h3 class="description__info__inner">
        Работаю с большим портфелем вакансий от junior специалистов до
        топ-менеджмента. Экспертиза, накопленная за время работы в сфере HR и рекрутинге
        позволяет мне брать в работу самые разные карьерные запросы.
      </h3>
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
      font-size: 40px;
      padding-bottom: 10px;
      color: $accent-middle-grey;
    }
    &__perks {
      width: 600px;
      margin-left: 10px;
      &__item {
        color: $accent-middle-grey;
        font-size: 18px;
      }
    }
    &__info {
      margin-top: 100px;
      text-align: right;
      color: $accent-middle-grey;
      &:last-child {
        /*text-align: left;*/
      }
      &__inner {
        width: 650px;
      }
    }
  }
  .rose {
    color: $accent-dust-rose;
    font-size: 25px;
    margin-right: 10px;
  }

</style>
