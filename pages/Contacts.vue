<template>
  <div>
    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 400px; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">
        Контакты
      </h3>
      <div class="line"></div>
    </div>

    <div style="display: flex; justify-content:center;">
      <a href="#">
        <fa-icon class="contactIcon" icon="fa-brands fa-square-instagram"/>
      </a>
      <a href="#">
        <fa-icon class="contactIcon" icon="fa-brands fa-telegram"/>
      </a>
      <a href="#">
        <fa-icon class="contactIcon" icon="fa-brands fa-whatsapp"/>
      </a>
      <a href="#">
        <fa-icon class="contactIcon" icon="fa-solid fa-envelope"/>
      </a>
    </div>

    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 1500px; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">
        Записаться на консультацию
      </h3>
      <div class="line"></div>
    </div>

    <pre>{{$v}}</pre>

    <div style="position: relative; padding-bottom: 111px;">
      <div style="display: flex; justify-content:center; flex-wrap: wrap; width: 600px; margin: auto">
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.name"
            type="text"
            placeholder="Имя*"
          >
          <!--                <div style="color: #b75757; position: absolute; bottom: 20px; left: 6px;">Поле обязательно</div>-->
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.phone"
            type="text"
            placeholder="Телефон*"
          >
          <!--                <div style="color: #b75757; position: absolute; bottom:20px; left: 6px;">Поле обязательно</div>-->
          <!--                <div style="color: #b75757; position: absolute; bottom: 20px; left: 6px;">Введите корректный телефон</div>-->
        </div>
        <div class="input_holder" style="position: relative">
          <input
            class="input"
            v-model="form.email"
            type="text"
            placeholder="Email"
          >
          <!--                <div style="color: #b75757; position: absolute; bottom: 20px; left: 6px;">Введите корректный email</div>-->
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
        <!--            <div style="color: #b75757; padding-left: 3px;">Поле обязательно</div>-->
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
  import {instance} from "/api/instance";

  export default {
    name: "Contacts",
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
          const response = await
            instance.post(`/sendMessage?chat_id=-452132239&parse_mode=html&text=${encodeURI(message)}`)
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

<style scoped>
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
</style>
