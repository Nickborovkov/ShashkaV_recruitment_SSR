<template>
  <div>
    <divider text="Контакты"/>

    <div style="display: flex; justify-content:center;">
      <a class="link" href="https://t.me/shashkav">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
        </svg>
      </a>
      <a class="link" href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
      <a class="link" href="mailto:mail@htmlacademy.ru">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
      </a>
    </div>

    <divider text="Записаться на консультацию"/>

    <div style="position: relative; padding-bottom: 111px;">
      <div style="display: flex; justify-content:center; flex-wrap: wrap; width: 600px; margin: auto">
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.name"
            type="text"
            placeholder="Имя*"
          >
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.phone"
            type="text"
            placeholder="Телефон*"
          >
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.email"
            type="text"
            placeholder="Email"
          >
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.telegram"
            type="text"
            placeholder="Телеграмм">
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.cvLink"
            type="text"
            placeholder="Ссылка на резюме">
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.knowFrom"
            type="text"
            placeholder="Откуда узнали">
        </div>
      </div>

      <div class="textarea__holder">
            <textarea
              class="textarea"
              v-model="form.theme"
              placeholder="Тема обращения*"
            />
      </div>

      <div style="display: flex; justify-content:center; margin-top: 30px;">
        <button class="button" @click="newBotMessage">Записаться</button>
      </div>

      <div v-if="success"  style="background-color: #cde6cd; text-align: center; width: 300px; padding: 20px; position: absolute; bottom: 0;
        left: 425px ">
        Вы успешно записались на консультацию
      </div>

      <div v-if="error"  style="background-color: #f4dddd; text-align: center; width: 300px; padding: 20px; position: absolute; bottom: 0;
        left: 425px ">
        Произошла ошибка, повторите позже
      </div>

    </div>
  </div>
</template>

<script>
  import Divider from "../UI/elements/Divider";

  export default {
    name: "Contacts",
    components: {Divider},
    layout: 'BasePageLayout',
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          telegram: '',
          cvLink: '',
          knowFrom: '',
          theme: '',
        },
        error: false,
        success: false,
        isFetching: false
      }
    },
    watch: {
      error() {
        if(this.error) {
          setTimeout(()=>{this.error = false}, 1000)
        }
      },
      success() {
        if(this.success) {
          setTimeout(()=>{this.success = false}, 1000)
        }
      },
    },
    methods: {
      async newBotMessage() {
        this.error = false
        this.success = false
        this.isFetching = true

        let message = ''
        let fields = [
          '<b>Имя</b>: ' + this.form.name,
          '<b>Телефон</b>: ' + this.form.phone,
          '<b>Email</b>: ' + this.form.email,
          '<b>Telegram</b>: ' + this.form.telegram,
          '<b>Ссылка на резюме</b>: ' + this.form.cvLink,
          '<b>Откуда узнали</b>: ' + this.form.knowFrom,
          '<b>Тема обращения</b>: ' + this.form.theme,
        ]

        fields.forEach(field => {
          message += field + '\n'
        })

        try {
          const response = await this.$axios.$post(`/sendMessage?chat_id=-452132239&parse_mode=html&text=${encodeURI(message)}`)
          if(response.status === 200){
            this.success = true
            this.clearFields()
            // this.$v.$reset()
          }else {
            this.error = true
          }
        }catch (e) {
          this.error = true
        }finally {
          this.isFetching = false
        }
      },
      clearFields() {
        this.form.name = ''
        this.form.phone = ''
        this.form.email = ''
        this.form.knowFrom = ''
        this.form.theme = ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";
  .line{
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
  .contactIcon{
    text-decoration: none;
    font-size: 20px;
    margin: 0 25px;
    color: #d39999;
    font-size: 50px;
    transition: .5s;
  }
  .contactIcon:hover{
    transform: scale(1.3,1.3);
  }
  .input_holder{
    width: 300px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .input{
    width: 250px;
    height: 20px;
    padding: 20px;
    font-size: 20px;
    color: #555555;
    border: 1px solid #cccccc;
  }
  .textarea__holder{
    width: 600px;
    margin: auto;
  }
  .textarea{
    width: 560px;
    height: 120px;
    padding: 15px;
    color: #555555;
    border: 1px solid #cccccc;
    font-size: 20px;
    display: block;
    margin: auto;
  }
  .button{
    width: 250px;
    height: 40px;
    background-color: #000;
    color: #ffff;
    border: none;
    font-size: 20px;
    transition: .5s;
  }
  .button:hover{
    background-color: #d39999;
  }
  .link{
    text-decoration: none;
    color: $accent-middle-grey;
    margin: 0 10px;
  }
</style>
