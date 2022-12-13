<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
// import { inject } from 'vue'

export default defineComponent({
  props: ['detail'],
  setup(props) {
    // const items = inject('items')
    // console.log('inject item', items)
    const router = useRouter()
    const onNewsClick = (id) => {
      console.log(id, 'aa')
      const params = props.detail.find(obj => id == obj.id)
      console.log(params.id, "id")
      router.push({path:`/news/${params.id}`})
    }

    return {
      onNewsClick,
      // items,
      // addItems,
    }
  },
})
</script>

<template>
    <div class="news">
      <ul class="news-list">
        <!-- <li v-for="i in items" :key="i">{{i.title}}</li> -->
        <li v-for="item in detail" :key="item.item_id" @click="onNewsClick(item.id)">
          <span class="date">{{item.title}}<br></span>
          <span class="link-title">{{item.body}}</span>
        </li>
      </ul>
      <div class="list">
        <router-link to="/news/newslist" class="on">お知らせ一覧へ</router-link>
      </div>
  </div>
</template>

<style scoped>
.news > ul {
  list-style-type: none;
}
.news-list > li {
  /* border: solid 1px gray; */
  box-shadow: 0 0 8px rgb(0 0 0 / 16%);
  margin: 0 7% 48px;
  padding: 24px;
}
.news-list > li:hover, .on:hover {
  filter: opacity(70%);
  cursor: pointer;
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
</style>