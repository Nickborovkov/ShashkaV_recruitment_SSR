<template>
  <div>
    <divider text="Обо мне"/>

    <div class="flex-center">
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
      <div class="photo__Container">
        <img class="photo" src="@/assets/images/photos/avatar3_alt.jpg" alt="">
      </div>
    </div>

    <divider text="Квалификация"/>

    <div>
      <div class="flex-center">
        <div @click="openDiploma(diploma.id)" class="diploma" v-for="diploma in qualification" :key="diploma.id">
          <img class="diploma__img" :src="diploma.scan" alt="diploma_img">
        </div>
      </div>
    </div>


    <app-modal :modal="diplomaModal" @close-modal="diplomaModal = false">
      <img style="width: 100%;" :src="selectedDiploma.scan" alt="diploma_img">
    </app-modal>
  </div>
</template>

<script>
  import diploma1 from '../assets/images/diplomas/diploma_1.jpg'
  import diploma2 from '../assets/images/diplomas/diploma_2.jpg'
  import Divider from "../UI/elements/Divider";
  import AppModal from "../UI/elements/AppModal";

  export default {
    name: "AboutMe",
    layout: 'BasePageLayout',
    components: { Divider, AppModal },
    data() {
      return {
        qualification: [
          {id: 0, scan: diploma1},
          {id: 1, scan: diploma2},
        ],
        diplomaModal: false,
        selectedDiploma: ''
      }
    },
    methods: {
      openDiploma(id) {
        this.selectedDiploma = this.qualification.find((item) => item.id === id)
        this.diplomaModal = true
      }
    }
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
  .photo__Container {
    width: 40%;
  }

  .photo {
    display: block;
    margin: auto;
    width: 90%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .diploma{
    width: 350px;
    display: block;
    margin: 10px;
    cursor: pointer;
    &__img{
      width: 100%;
    }
  }
</style>
