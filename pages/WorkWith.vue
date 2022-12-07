<template>
  <div>
    <divider text="С чем я работаю"/>

    <div v-for="(workItem, index) in workWith" :key="workItem.id" style="margin-bottom: 60px;">
      <h3 style="font-size: 30px; color: #999999; padding-bottom: 50px; color: #d39999">{{workItem.title}}</h3>
      <div>
        <div style="display: flex">
          <div>
            <img style="width: 500px;" :src="workItem.image" alt="workwith__img">
          </div>
          <ul style="box-sizing: border-box; padding: 50px 50px 50px 150px" >
            <li style="font-size: 20px; color: #555555; margin: 15px 0;" v-for="item in workItem.tags" :key="item + randomId">
              {{item}}</li>
          </ul>
        </div>
        <h5 style="font-size: 25px; color: #999999; padding-top: 20px; text-align: right">Стоимость:
          <span style="color: #d39999">{{workItem.price}} ₽</span>
        </h5>
        <div class="meeting__holder">
          <router-link class="meeting" to="/contacts">Записаться на консультацию</router-link>
        </div>

        <div v-if="index !== 3" style="width: 100%; height: 1px; background-color: #cccccc; margin: 50px 0;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import cv from '@/assets/images/workWith/cv.jpg'
  import career from '@/assets/images/workWith/career.jpg'
  import coach from '@/assets/images/workWith/coach.jpg'
  import pack from '@/assets/images/workWith/pack.jpg'
  import Divider from "../UI/elements/Divider";

  export default {
    name: "Workwith",
    layout: 'BasePageLayout',
    components: { Divider },
    data() {
      return {
        workWith: [
          {
            id: 0,
            title: 'Работа с резюме',
            image: cv,
            tags: [
              'Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание',
              'Описание Описание Описание'
            ],
            price: '2000',
          },
          {
            id: 2,
            title: 'Карьерное консультирование',
            image: career,
            tags: [
              'Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание',
              'Описание Описание Описание'
            ],
            price: '4000',
          },
          {
            id: 3,
            title: 'Коуч-сессии',
            image: coach,
            tags: [
              'Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание',
              'Описание Описание Описание'
            ],
            price: '4000',
          },
          {
            id: 4,
            title: 'Пакетные сессии',
            image: pack,
            tags: [
              'Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание Описание Описание Описание',
              'Описание Описание Описание Описание Описание',
              'Описание Описание Описание'
            ],
            price: '15000',
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
  .meeting__holder{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .meeting{
    background-color: #d39999;
    color: white;
    text-decoration:none;
    padding: 10px 5px;
    transition: .5s;
  }
  .meeting:hover{
    background-color: #000000;
  }
</style>
