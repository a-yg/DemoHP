<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    const detail = ref({})
    const router = useRouter()

    onMounted( async () => {
      const url = "https://jsonplaceholder.typicode.com/posts"
      try {
      const response = await axios.get(url)
      detail.value = response.data
      console.log(detail.value, 'detail/list')
      } catch (error) {
        console.log("get失敗")
        } 
    })

    const onNewsClick = (id) => {
      console.log(id, 'aa')
      const params = detail.value.find(obj => id == obj.id)
      console.log(params.id, "id")
      router.push({path:`/news/${params.id}`})
    }
    
    return {
      detail,
      onNewsClick,
    }
  }
})
</script>

<template>
    <div class="news">
      <h2 class="title">お知らせ一覧</h2>
      <ul class="news-list">
        <li v-for="item in detail" :key="item.item_id" @click="onNewsClick(item.id)">
          <span class="date">{{item.title}}<br></span>
          <span class="link-title">{{item.body}}</span>
        </li>
      </ul>
  </div>
</template>

<style scoped>
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