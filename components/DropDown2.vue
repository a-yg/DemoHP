<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    const navItems = ref([
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
      <li>
        <span
          @mouseover="mouseover" @mouseleave="mouseleave"
          >
          <p>About</p>

          <ul class="dropdown" :class="{isOpen}">
            <li v-for="sub in navItems" :key="sub">
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
#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
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
    text-decoration: none;
}
/* #nav > ul > li > span:after {
    content: '▼';
    display: inline-block;
    transform: rotate(90deg);
} */
.dropdown {
    /* position: absolute; */
    display: none;
    list-style-type: none;
    /* z-index: 5; */
    background: linear-gradient(180deg,#00afaf,#005858);
    bottom: -29px;
    box-shadow: 0 8px 11px rgb(0 0 0 / 16%);
    left: 50%;
    padding: 23px 33px 24px 24px;
    position: absolute;
    /* position: relative; */
    -webkit-transform: translate(-50%,100%);
    transform: translate(-50%,100%);
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
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
</style>