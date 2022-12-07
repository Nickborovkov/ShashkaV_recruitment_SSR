<template>
  <div>
    <divider text="Мой блог: полезная информация"/>

    <div class="posts">
      <NuxtLink
        style="text-decoration: none; transition: 0.5s"
        :to="`/blog/${post.id}`"
        class="post"
        v-for="post in posts"
        :key="post.id"
      >
        <div style="position: relative">
          <img class="post__image" :src="post.image" alt="blog_image">
          <div class="post__tags">
            <p class="post__tag" v-for="tag in post.tags" :key="tag + randomId">{{tag}}</p>
          </div>
        </div>
        <div style="padding: 10px;">
          <h3 class="post__title">
            {{post.title}}
          </h3>
          <p style="color: #999999; font-size: 13px; text-transform: uppercase; padding: 10px 0 20px 0">{{post.date}}</p>
          <p style="color: #999999">Краткое описание краткое описание краткое описание краткое описание краткое
            описание</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import blog1 from '/assets/images/blog/vertical/blog1.jpg'
  import blog2 from '/assets/images/blog/vertical/blog2.jpg'
  import blog3 from '/assets/images/blog/vertical/blog3.jpg'
  import blog4 from '/assets/images/blog/vertical/blog4.jpg'
  import blog5 from '/assets/images/blog/vertical/blog5.jpg'
  import blog6 from '/assets/images/blog/vertical/blog6.jpg'
  import blog7 from '/assets/images/blog/vertical/blog7.jpg'
  import blog8 from '/assets/images/blog/vertical/blog8.jpg'
  import blog9 from '/assets/images/blog/vertical/blog9.jpg'
  import Divider from "../UI/elements/Divider";


  export default {
    name: "Blog",
    layout: 'BasePageLayout',
    components: { Divider },
    data() {
      return {
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
            image:  blog2,
            date: '1 марта 2022',
            title: 'Название поста',
            tags: ['Карьера', 'Рассуждение', ],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 2,
            image:  blog3,
            date: '16 апреля 2022',
            title: 'Название поста',
            tags: ['Отношения', 'Рассуждение', ],
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque ducimus, iste quasi quis similique velit. Aliquid culpa distinctio dolores dolorum, eveniet id, ipsa laboriosam mollitia nesciunt numquam, quaerat ut? Ab assumenda dignissimos dolor doloremque facilis, minima natus nulla, obcaecati omnis porro quae, quasi quidem quod temporibus totam veniam vitae.',
          },
          {
            id: 3,
            image:  blog4,
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
      randomId() {
        return Math.random() * Math.random() * 1000000
      }
    }
  }
</script>

<style scoped>
  .posts{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .post{
    width: 350px;
    margin: 20px 10px;
    box-sizing: border-box;
  }
  .post:hover{
    transform: scale(1.02,1.02);
    box-shadow: 2px 2px 5px #dddddd, -2px -2px 5px #dddddd;
  }
  .post__title{
    text-decoration: none;
    color: #2a2825;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px
  }
  .post__image{
    width: 100%;
    display: block;
    margin: auto;
  }
  .post__tags{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
  }
  .post__tag{
    background-color: #c2b599;
    padding: 3px 8px;
    color: #ffffff;
  }
  .post__tag:not(:first-child){
    margin-left: 8px;
  }
  .line{
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
</style>
