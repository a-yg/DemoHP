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
    const shopLists = ref([
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
      {
      title: "AAAAAA",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      },
    ])
    return {
      items,
      shopLists
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
      <div class="lists">
        <ul class="shop-list">
          <li v-for="shopList in shopLists" :key="shopList">
            <img src="../img/shop-list.png"><br>
          <a href="#">{{shopList.title}}<br>
          {{shopList.text}}</a>
          </li>
        </ul>
      </div>
      <div class="list">
        <a href="#">ショプ一覧へ</a>
      </div>
    </div>
    <h2 class="title">シェア</h2>
    <div class="shea">
      <a href="https://twitter.com/intent/tweet?url=https://mall.vketlink.com/&text=【VketMall Proto】 バーチャルな時を共に過ごすお店。人々の日常に、きらめくひとひらの出会いを添えて。開催期間：2021年8月14日～2021年8月28日">
      <img src="../img/twitter.png" class="twitter">
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://mall.vketlink.com/&amp;t=【VketMall Proto】 バーチャルな時を共に過ごすお店。人々の日常に、きらめくひとひらの出会いを添えて。開催期間：2021年8月14日～2021年8月28日">
      <img src="../img/facebook.png" class="facebook">
      </a>
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

.shop-list {
  margin: 30px 60px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
}
.shop-list > li {
  word-wrap: break-word;
  width: 24%;
  margin: 20px 0;
  padding: 50px 30px;
  border: solid 2px black;
  border-radius: 15px;
  text-align: center;
  /* background-image: linear-gradient(-45deg,#000 25%,transparent 0,transparent 50%,#000 0,#000 75%,transparent 0,transparent);
  background-repeat: repeat;
  background-size: 6px 6px;
  z-index: -1; */
}
.shop-list > li > img {
  width: 100%;
}
.shop-list > li > a {
  text-decoration: none;
  color: black;
}
.shea {
  align-items: center;
    display: flex;
    height: 60px;
    justify-content: flex-start;
    gap: 30px;
    margin: 50px 10px;
}
.twitter{
  width: 60px;
  border-radius: 50px;
}
.facebook {
  width: 60px;
}
</style>