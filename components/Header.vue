<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {ref} from 'vue'
import HeaderFocas from './HeaderFocas.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default defineComponent({
  components: {
    HeaderFocas,
  },
  setup() {
    onMounted(() => {
      console.log('composition api')
    })
    const About = ref('About')
    const Language = ref('Language')
    const image = ref
    const icon = ref
    const imgItems = ref([
      {
        url: "#",
        title: "さささ"
      },
      {
        url: "#",
        title: "ししし"
      },
      {
        url: "#",
        title: "すすす"
      },
    ])
    const AboutItems = ref([
      {
        url: "#",
        title: "あああ"
      },
      {
        url: "#",
        title: "いいい"
      },
      {
        url: "#",
        title: "ううう"
      },
    ])
    const LanguageItems = ref([
      {
        url: "#",
        title: "かかか"
      },
      {
        url: "#",
        title: "ききき"
      },
      {
        url: "#",
        title: "くくく"
      },
    ])

    return {
      AboutItems,
      About,
      Language,
      LanguageItems,
      image,
      imgItems,
      icon,
      // listImg
    }
  },
})
</script>

<template>
  <header>
    <title>VketMall Proto</title>
    <nav id="nav">
        <ul class="nav">
          <HeaderFocas :subitems="imgItems" :image="image" />
          <!-- <li><img src="../assets/img/logo.png" alt="logo"></li>
          <li><a href="#">About</a></li> -->
          <HeaderFocas :subitems="AboutItems" :title="About"/>
          <li><a href="#">来場方法</a></li>
          <li><a href="#">カタログ</a></li>
          <li><a href="#">ショップ</a></li>
          <li><a href="#">お問い合わせ</a></li>
          <li><a href="#"><i class="bi bi-person-circle"></i>出展者ログイン</a></li>
          <HeaderFocas :subitems="LanguageItems" :title="Language" :icon="icon" />
          <!-- <li><a href="#"><i class="bi bi-globe-asia-australia"></i>Language</a></li> -->
        </ul>
    </nav>
    <div class="header-ph">
      <img src="../assets/img/header-ph.png" alt="header-ph">
    </div>
    <div class="header-ph2">
      <!-- target="_blank"：別タブで開く -->
    <a href="https://winter2021.vket.com/" target="_blank"><img src="../assets/img/link1.jpg"></a>
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
  align-items: center;
  margin: 8px 20%;
  font-size: 14px;
  text-decoration: none;
}
.nav > li > img {
  width: 70px;
}
.nav > li:hover {
  filter: opacity(70%);
  cursor: pointer;
}

.nav {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
/* .nav > li > span {
    position: relative;
    display: block;
    height: auto;
    text-decoration: none;
}
.nav > li > span:after {
    display: inline-block;
    transform: rotate(90deg);
} */
.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    padding: 0;
    list-style-type: none;
    background-color: rgb(126, 124, 124);
    z-index: 5;
}
.dropdown li {
    width: 250px;
    border-bottom: 1px solid;
}
.dropdown li a {
    display: block;
    padding: 10px;
    text-decoration: none;
}
.isOpen {
  display: block;
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
  bottom: 10%;
  left: 25%;
}
.header-ph2 > a > img:hover {
  filter: opacity(70%);
}
</style>