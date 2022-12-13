<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import {ref, onMounted, provide} from 'vue'
import axios from 'axios'
import NewsList from '../components/NewsList.vue'
import Shoplist from '../components/Shoplist.vue'
// import { useItems } from '../components/useItem.ts'

export default defineComponent({
  components: {
    NewsList,
    Shoplist
  },
  setup () {
    const detail = ref({})
    const data = ref({})
    // const test = ref()
    // const { detail, fetchGetitems } = useItems();
    //   await fetchGetitems();
    //   test.value = 
    //   await provide('items', detail.value)
    //   console.log(detail.value, 'items!!!!!')
    onMounted( async () => {
      const url = "https://jsonplaceholder.typicode.com/posts"
      try {
      const response = await axios.get(url)
      detail.value = response.data.slice(0,5)
      console.log(detail.value, 'detail')
    } catch (error) {
        console.log("get失敗")
      }

      const url2 = "https://jsonplaceholder.typicode.com/photos"
      try {
        const response2 = await axios.get(url2)
        data.value = response2.data.slice(0, 11)
        console.log(data.value, "data")
      } catch (error) {
        console.log("data失敗")
      }
    })

    return {
      data,
      detail,
    }
  },
})
</script>

<template>
  <div class="container">
    <h2 class="title">お知らせ</h2>
    <NewsList :detail="detail"/>

    <h2 class="title">ショップ</h2>
    <Shoplist :data="data"/>

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