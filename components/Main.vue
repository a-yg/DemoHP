<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import {ref, Ref} from 'vue'

export default defineComponent({
  setup() {

  //   type Item = {
  //   date: string,
  //   title: string,
  // }
    const items = ref([
      {
        date: '2021/08/28',
        title: 'VketMall Protoは8/28に終了しました'
      },
      {
        date: '2021/08/14',
        title: 'VketMall Protoがオープンしました!'
      },
      {
        date: '2021/08/14',
        title: 'カタログページを公開しました。'
      }
    ])
    return {
      items
    }
  },
})
</script>

<template>
  <div class="container">
    <h2 class="title">お知らせ</h2>
    <div class="news">
      <ul class="news-list">
        <li v-for="item in items" :key="item">
          <span class="date">{{item.date}}<br></span>
          <span class="link-title">{{item.title}}</span>
        </li>
      </ul>
      <div class="list">
        <a href="#">お知らせ一覧へ</a>
      </div>
    </div>
    <h2 class="title">ショップ</h2>
    <div class="shop">
      <!-- <iframe src="https://www.youtube.com/watch?v=ssPoe6_hjyI"></iframe> -->
      <iframe width="100%" height="600" src="https://youtu.be/ssPoe6_hjyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 15%;
}
.title {
  color: #ef7b1a;
  font-size: 36px;
  font-weight: normal;
  letter-spacing: .05em;
  line-height: 48px;
  margin-bottom: 32px;
}
.news > ul {
  list-style-type: none;
}
.news-list > li {
  /* border: solid 1px gray; */
  box-shadow: 0 0 8px rgb(0 0 0 / 16%);
  margin: 0 7% 48px;
  padding: 24px;
}
.date {
  color: gray;
  font-size: 8px;
}
.list-title {
  font-weight: 900;
}
.list > a {
  color: black;
  text-decoration: none;
  font-size: 14px;
}
.list {
  text-align: right;
}
.news {
  margin-bottom: 100px;
}
</style>