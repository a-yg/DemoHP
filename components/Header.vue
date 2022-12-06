<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import 'bootstrap-icons/font/bootstrap-icons.css'


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
        <ul class="nav">
          <li><img src="../img/logo.png" alt="logo"></li>
          <li><a href="#">About</a></li>
          <li><a href="#">来場方法</a></li>
          <li><a href="#">カタログ</a></li>
          <li><a href="#">ショップ</a></li>
          <li><a href="#">お問い合わせ</a></li>
          <li><a href="#"><i class="bi bi-person-circle"></i>出展者ログイン</a></li>
          <li><a href="#"><i class="bi bi-globe-asia-australia"></i>Language</a></li>
        </ul>
    </nav>
    <div class="header-ph">
      <img src="../img/header-ph.png" alt="header-ph">
    </div>
    <div class="header-ph2">
    <img src="../img/link1.jpg">
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
}
.nav > li > a > i {
  margin: 2px;
}
#nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px 20%;
  font-size: 14px;
  text-decoration: none;
}
.nav > li > img {
  width: 70px;
}
a {
  color: rgb(65, 64, 64);
  text-decoration: none;
};
/* #nav img {
  width: 20%;
  height: auto;
} */
.header-ph {
  width: 100vh;
  min-height:100vh;
  position: relative;
}
.header-ph > img {
  width: 100%;
}
.header-ph2 {
  position: absolute;
  bottom: 6%;
  left: 30%;
}
</style>