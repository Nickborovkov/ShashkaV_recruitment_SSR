<template>
  <div>
    <divider text="Обо мне"/>

    <div class="about_me">
      <info class="about_me__info" />
      <div class="photo__Container">
        <img class="photo" src="../static/images/photos/new_avatar.jpg" alt="">
      </div>
    </div>

    <divider text="Квалификация"/>

    <div>
      <div class="qualification">
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
  import diploma1 from '../static/images/diplomas/diploma_1.jpg'
  import diploma2 from '../static/images/diplomas/diploma_2.jpg'
  import Divider from "../UI/elements/Divider";
  import AppModal from "../UI/elements/AppModal";
  import Info from "../components/aboutMe/Info";

  export default {
    name: "AboutMe",
    layout: 'BasePageLayout',
    components: { Info, Divider, AppModal },
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
  .about_me {
    display: flex;
    justify-content: center;
    %__info {
      width: 60%;
    }
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

  .qualification {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px){
    .about_me {
      flex-direction: column-reverse;
      &__info {
        width: 100%;
      }
    }
    .photo__Container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .photo {
      width: 70%;
    }
  }
</style>
