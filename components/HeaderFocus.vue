<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  props: ["subitems", "title", "image", "imgTitle", "icon"],
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
      mouseleave,
    }
  },
})
</script>

<template>
  <nav class="nav">
    <ul>
      <li class="test">
        <span
          @mouseover="mouseover" @mouseleave="mouseleave"
          >
          <span v-if="image"><img :src="image"></span>
          <div class="title"><span v-if="icon"><i :class="icon"></i></span>{{title}}</div>

          <ul class="dropdown" :class="{isOpen}">
            <li v-for="sub in subitems" :key="sub.sub_url">
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
a {
  color: black;
}
p:hover, .dropdown li:hover {
  filter: opacity(70%);
  cursor: pointer;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}
.nav h1 {
    margin: 0 0 0 20px;
}
.nav > ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.nav > ul > li > a {
  display: block;
  height: auto;
  padding: 20px;
  text-decoration: none;
  color: black;
}
.nav > ul > li > span {
  /* position: relative; */
  display: contents;
  height: auto;
  text-decoration: none;
}
.nav img {
  width: 70px;
  height: 100%;
  margin: 0;
  padding: 0;
}
.title {
  margin: 13px 0px;
}
.test {
  display: flex;
  align-items: center;
}

/* .nav > ul > li > span:after {
    content: '▼';
    display: inline-block;
    transform: rotate(90deg);
} */
.dropdown {
  display: none;
  list-style-type: none;
  background: linear-gradient(180deg,#00afaf,#005858);
  bottom: -10px;
  box-shadow: 0 8px 11px rgb(0 0 0 / 16%);
  left: 50%;
  padding: 23px 33px 24px 24px;
  position: absolute;
  -webkit-transform: translate(-50%,100%);
  transform: translate(-50%,100%);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  animation-name: my-fade-in;
  animation-duration: 1s;
}
@keyframes my-fade-in {
  0% {
    transform-origin:top;
    transform:scaleY(0.5);
  }
  50% {
    transform-origin:top;
    transform:scaleY(-10px);
  }
  /* 100% {
    transform: translateY(100%);
  } */
  /* from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } */
}
.dropdown:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-bottom: 15px solid #00afaf;
}
.dropdown li {
    width: 95px;
    border-bottom: 1px solid;
}
.dropdown li a {
    display: block;
    padding: 10px;
    text-decoration: none;
    text-align: center;
}
.isOpen {
    display: block;
}
i {
  margin: 2px;
}
</style>