<template>
  <div class="description">
    <h3 class="description__name">Шашина Виктория</h3>
    <div class="description__perks">
      <h5 class="description__perks__item">
        <svg style="color: #A2C1AF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot"
             viewBox="0 0 16 16">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        Сертифицированный ICI коуч <br> и карьерный консультант
      </h5>
      <h5 class="description__perks__item">
        <svg style="color: #A2C1AF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        Team Lead IT-Recruiter
      </h5>
      <h5 class="description__perks__item">
        <svg style="color: #A2C1AF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        Ментор сообщества PROwomen
      </h5>
      <h5 class="description__perks__item">
        <svg style="color: #A2C1AF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        Автор образовательных онлайн-интенсивов <br> и контента для карьерных площадок
      </h5>
      <h5 class="description__perks__item">
        <svg style="color: #A2C1AF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
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
        display: flex;
        align-items: center;
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
        text-align: center;
      }
    }
  }
  .rose {
    color: $accent-dust-rose;
    font-size: 25px;
    margin-right: 10px;
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
