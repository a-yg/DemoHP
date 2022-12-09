<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['data'],
  setup(props) {
    const router = useRouter()
    const onShopClick = (id) => {
      const params = props.data.find(obj => id == obj.id)
      router.push({path:`/shop/${params.id}`})
    }

    const onShopList = () => {
      router.push('/shop/shoplist')
    }

    return {
      onShopClick,
      onShopList
    }
  },
})
</script>

<template>
  <div class="shop">
      <!-- <iframe src="https://www.youtube.com/watch?v=ssPoe6_hjyI"></iframe> -->
      <iframe width="100%" height="600" src="https://youtu.be/ssPoe6_hjyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="lists">
        <ul class="shop-list">
          <li v-for="shopList in data" :key="shopList" @click="onShopClick(shopList.id)">
            <img :src="shopList.url"><br>
          {{shopList.url}}<br>
          {{shopList.title}}
          </li>
        </ul>
      </div>
      <div class="list">
        <a href="/shop" class="on">ショプ一覧へ</a>
      </div>
    </div>
</template>

<style scoped>
.shop-list {
  margin: 30px 60px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
}
.shop-list > li:hover {
  filter: opacity(70%);
  cursor: pointer;
}
.shop-list > li {
  word-wrap: break-word;
  width: 24%;
  margin: 20px 0;
  padding: 50px 30px;
  border: solid 2px black;
  border-radius: 15px;
  text-align: center;
}
.shop-list > li > img {
  width: 100%;
}
.shop-list > li > a {
  text-decoration: none;
  color: black;
}
.list > a {
  color: black;
  text-decoration: none;
  font-size: 14px;
}
.list {
  text-align: right;
}
.on:hover {
  filter: opacity(70%);
  cursor: pointer;
}
</style>