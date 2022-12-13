<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  props: {
    title: String,
    items: String
  },
  setup() {
    const isOpen = ref(false)

    const mouseover = () => {
      isOpen.value = true
    }
    const mouseleave = () => {
      isOpen.value = false
    }

    return {
      isOpen,
      mouseover,
      mouseleave
    }
  },
})
</script>

<template>
  <div>
      <ul class="menu-item">
        <!-- <li><a href="#">About</a></li>
        <li><a href="#"><i class="bi bi-globe-asia-australia"></i>Language</a></li>  -->
        <li @click="isOpen = !isOpen" @mouseover="mouseover"
          @mouseleave="mouseleave"
          class="menu"><img src="../img/logo.png" alt="logo"></li>
      </ul>
    <div>
      <ul class="sub-menu" :class="{isOpen}">
        <li v-for="(item, i) in items" :key="i">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
img:hover {
  filter: opacity(70%);
  cursor: pointer;
}
.menu-item {
  position: relative;
}
.sub-menu > ul > li {
  margin: 10px;
}
.sub-menu {
  display: none;
  position: absolute;
  z-index: 5;
}
.isOpen {
  display: block;
}
</style>