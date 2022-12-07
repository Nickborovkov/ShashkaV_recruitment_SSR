<template>
  <div>
    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 600px; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">
        Формат работы
      </h3>
      <div class="line"></div>
    </div>
    <div style="display: flex">
      <div>
        <video width="550" id="video_background" preload="auto" no-controls autoplay loop playsinline muted
               :src="video"></video>
        <!--            <img style="width: 600px;" src="@/assets/images/workFormat/online.jpg" alt="">-->
      </div>
      <div>

        <div style="margin-bottom: 50px;">
          <div style="margin-left: 40px;">
            <h2 style="color: #d39999">Карьерное консультирование <br>
              <span>( онлайн-сессия 60 минут)</span></h2>
            <!--                    <p style="color: #d39999; margin: 10px 0">Онлайн-сессия продолжительностью 60 минут</p>-->
            <!--                    <p style="color: grey;">В рамках карьерных консультаций работаю с запросами:</p>-->
          </div>

          <ul style="margin-left: 100px;">
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">составление эффективного резюме</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">упаковка профиля на LinkedIn</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">анализ рынка, помощь с определением зарплатных ожиданий</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">алгоритм действий: с чего начать, при смене профессии</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">определение дальнейших шагов для профессионального развития</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">оценка сильных и слабых сторон</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">подготовка самопрезентации к собеседованию</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">тестовое интервью с HR</span>
            </li>
          </ul>
        </div>
        <div>

          <div style="margin-left: 40px;">
            <h2 style="color: #d39999">Коучинг ( онлайн-сессия 60 минут)</h2>
            <!--                    <p style="color: #d39999; margin: 5px 0">Онлайн-сессия продолжительностью 60 минут</p>-->
            <!--                    <p style="color: grey;">В рамках коуч-сессий работаю с широким спектром личных и профессиональных запросов:</p>-->
          </div>

          <ul style="margin-left: 100px;">
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">помощь с определением своих целей и путей их достижения</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">эмоциональное и профессиональное выгорание</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">проблемы в межличностных отношениях</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">неуверенность в себе: синдром “отличника” и “самозванца”</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">боязнь публичных выступлений</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">определение истинной мотивации</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">проработка установок и ограничивающих убеждений</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">поиск внутренних ресурсов</span>
            </li>
            <li style="margin: 10px 0; color: #d39999; font-size: 25px;">
              <span style="color: #555555; font-size: 16px;">повышение личной эффективности и многое другое</span>
            </li>
          </ul>
        </div>




      </div>






    </div>
  </div>
</template>

<script>
  import video from "../assets/videos/V_gif.mp4"

  export default {
    name: "WorkFormat",
    layout: 'BasePageLayout',
    data() {
      return {
        vtype: 'career',
        video: video,
        items: [
          {
            id: 0,
            text: 'Консультация длится 55 минут, онлайн, в удобное Вам время в онлайн формате.'
          },
          {
            id: 1,
            text: 'Я не знаю, что тут писать, поэтому просто украл текст с сайта той психологини'
          },
          {
            id: 2,
            text: 'Мы будем работать в уютной обстановке, я постараюсь создать для вас ощущение полной безопасности и защищенности. Очень важно выстроить доверие между нами, так психологическая работа будет более эффективной и качественной. Мы будем пить чай и разговаривать, а в процессе разговора будем открывать самые забытые странички вашей жизни, изучать их и осознавать.'
          },
          {
            id: 3,
            text: 'У каждого из нас есть секреты или проблемы, которыми мы не можем поделиться даже с самыми близкими людьми. Есть секреты, при мысли о которых, вдруг волной захлестывает стыд или вина. Психолог – это тот человек, которому можно довериться абсолютно. Он не является близким человеком, который может осудить или перед которым будет стыдно, он обладает знаниями и навыками для решения проблем, и что немаловажно, он готов Вас принять таким, какой Вы есть.'
          },
          {
            id: 4,
            text: 'Вы сами принимаете решение начать психологическую работу или прервать ее. Если вы приняли решение о завершении психологических консультаций, важно провести заключительную встречу, на которой мы подведем итоги нашей с вами работы, чтобы завершение консультаций не причинило какого-либо внутреннего эмоционального дискомфорта.'
          },
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
  .meeting{
    background-color: #d39999;
    color: white;
    text-decoration:none;
    padding: 10px 5px;
    transition: .5s;
    border: none;
    animation: test infinite linear;
  }
  @keyframes test {
    0%{ opacity: 0 }
    100%{ opacity: 1 }
  }
</style>
