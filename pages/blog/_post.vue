<template>
  <div>
    <div style="display: flex; padding: 50px 0;">
      <div class="line"></div>
      <h3 style="width: 50%; font-weight: 500; font-size: 25px; text-align: center; padding: 0 20px; color: #d39999">
        {{definePost.title}}
      </h3>
      <div class="line"></div>
    </div>

    <!--        <div>-->
    <!--            <button-->
    <!--                class="backButton"-->
    <!--            >-->
    <!--                <fa-icon class="contactIcon" icon="fa-solid fa-arrow-left-long"/>-->
    <!--            </button>-->
    <!--        </div>-->

    <div>
      <img style="display: block; margin: auto; width: 70%;" :src="definePost.image" alt="">
    </div>

    <div style="display: flex; justify-content:center;">
      <p style="background-color: #c2b599; color:#ffffff; display: block; padding: 5px; margin-top: 10px; margin-right: 5px;" v-for="tag in
        definePost.tags" :key="tag">
        {{tag}}</p>
    </div>

    <div style="width: 90%; padding-top: 20px;">
      <p style="text-align: right; color: #999999">{{definePost.date}}</p>
    </div>

    <div style="margin-top: 30px;">
      <div style="margin-bottom: 30px;">
        <p style="display: block; width: 80%; margin: auto">{{definePost.text1}}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <p style="display: block; width: 80%; text-align: right; margin: auto">{{definePost.text2}}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <p style="display: block; width: 80%; ; margin: auto">{{definePost.text3}}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <p style="display: block; width: 80%; text-align: right; margin: auto">{{definePost.text1}}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <p style="display: block; width: 80%; margin: auto">{{definePost.text2}}</p>
      </div>
      <div>
        <p style="display: block; width: 80%; text-align: right;; margin: auto">{{definePost.text3}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import blog1 from '@/assets/images/blog/horizontal/blog1.jpg'
  import blog2 from '@/assets/images/blog/horizontal/blog2.jpg'
  import blog3 from '@/assets/images/blog/horizontal/blog3.jpg'
  import blog4 from '@/assets/images/blog/horizontal/blog4.jpg'
  import blog5 from '@/assets/images/blog/horizontal/blog5.jpg'
  import blog6 from '@/assets/images/blog/horizontal/blog6.jpg'
  import blog7 from '@/assets/images/blog/horizontal/blog7.jpg'
  import blog8 from '@/assets/images/blog/horizontal/blog8.jpg'
  import blog9 from '@/assets/images/blog/horizontal/blog9.jpg'


  export default {
    name: "_post",
    data() {
      return {
        postId: this.$route.params.post,
        posts: [
          {
            id: 0,
            image: blog1,
            date: '25 декабря 2022',
            title: 'Название поста',
            tags: ['Резюме', 'Совет'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 1,
            image: blog2,
            date: '1 марта 2022',
            title: 'Название поста',
            tags: ['Карьера', 'Рассуждение',],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 2,
            image: blog3,
            date: '16 апреля 2022',
            title: 'Название поста',
            tags: ['Отношения', 'Рассуждение',],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 3,
            image: blog4,
            date: '5 мая 2022',
            title: 'Название поста',
            tags: ['Выгорание', 'Совет'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 4,
            image: blog5,
            date: '13 июня 2022',
            title: 'Название поста',
            tags: ['Собеседование', 'Вопрос'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 5,
            image: blog6,
            date: '28 августа 2022',
            title: 'Название поста',
            tags: ['Синдром самозванца', 'Совет'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 6,
            image: blog7,
            date: '1 сентября 2022',
            title: 'Название поста',
            tags: ['Семья', 'Вопрос'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 7,
            image: blog8,
            date: '8 сентября 2022',
            title: 'Название поста',
            tags: ['Жизненные цели', 'Рассуждение'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 8,
            image: blog9,
            date: '11 сентября 2022',
            title: 'Название поста',
            tags: ['Успех', 'Совет'],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
        ]
      }
    },
    computed: {
      definePost() {
        return this.posts.find(item => item.id === +this.postId)
      }
    },
    created() {
      window.scrollTo(0, 0)
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

  .backButton {
    font-size: 30px;
    background-color: #d39999;
    border: none;
    color: white;
    width: 100px;
    transition: .5s;
  }

  .backButton:hover {
    background-color: #000000;
  }
</style>
