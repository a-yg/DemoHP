<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    const navItems = ref([
      {
        url: "#",
        title: "img",
        sub: [
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
        ]
      },
      {
        url: "#",
        title: "About",
        sub: [
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
        ]
      },
      {
        url: "#",
        title: "来場方法"
      },
      {
        url: "#",
        title: "カタログ"
      },
      {
        url: "#",
        title: "ショップ"
      },
      {
        url: "#",
        title: "お問い合わせ"
      },
      {
        url: "#",
        title: "出展者ログイン"
      },
      {
        url: "#",
        title: "Language",
        sub: [
          {
            url: "#",
            title: "English"
          },
          {
            url: "#",
            title: "日本語"
          },
        ]
      },
    ])

    const mouseover = () => {
      isOpen.value = true
    }
    const mouseleave = () => {
      isOpen.value = false
    }
    
    return {
      isOpen,
      navItems,
      mouseover,
      mouseleave
    }
  },
})
</script>

<template>
  <nav id="nav">
    <ul>
      <li v-for="item in navItems" :key="item">
        <a :href="item.url" v-if="!item.sub">
          {{ item.title }}
        </a>
        <span v-else
          @mouseover="mouseover"
          @mouseleave="mouseleave">
          {{ item.title }}

          <ul class="dropdown" :class="{isOpen}">
            <li v-for="sub in item.sub" :key="sub">
              <a :href="sub.url">
                {{ sub.title }}
              </a>
            </li>
          </ul>
        </span>
      </li>
    </ul>
</nav>
</template>

<style scoped>
#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}
#nav h1 {
    margin: 0 0 0 20px;
}
#nav > ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
#nav > ul > li {
    margin: 0 20px 0 0;
}
#nav > ul > li > a {
    display: block;
    height: auto;
    padding: 20px;
    text-decoration: none;
    color: black;
}
#nav > ul > li > span {
    position: relative;
    display: block;
    height: auto;
    padding: 20px;
    text-decoration: none;
}
#nav > ul > li > span:after {
    content: '▼';
    display: inline-block;
    transform: rotate(90deg);
}
.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    padding: 0;
    list-style-type: none;
    background-color: rgb(173, 170, 170);
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
</style>