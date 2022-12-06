<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('composition api')
    })
  },
})
</script>

<template>
  <header>
    <title>VketMall Proto</title>
    <nav id="nav">
        <!-- <img src="../img/logo.png" alt="logo"> -->
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">来場方法</a></li>
          <li><a href="#">カタログ</a></li>
          <li><a href="#">ショップ</a></li>
          <li><a href="#">お問い合わせ</a></li>
          <li><a href="#">出展者ログイン</a></li>
          <li><a href="#">Language</a></li>
        </ul>
    </nav>
    <div class="header-ph">
      <img src="../img/header-ph.png" alt="header-ph">
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
}
#nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 20px 20%;
  font-size: 14px;
  text-decoration: none;
}
a {
  color: black;
  text-decoration: none;
};
/* #nav img {
  width: 20%;
  height: auto;
} */
.header-ph img {
  width: 100vh;
}
</style>