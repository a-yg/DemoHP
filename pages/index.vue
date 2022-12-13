<template>
  <div>
    <!-- <Header2 /> -->
    <Header />
    <Link />
    <Main />
    <Button  />
    <!-- :footerHeight="footerHeight" -->
    <!-- <div ref="footer"> -->
      <Footer />
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import 'normalize.css'
import Header from '../components/Header.vue'
// import Header2 from '../components/Header2.vue'
import Link from '../components/Link.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'

import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  components: {
    Header,
    Link,
    Main,
    Footer,
    Button
  },
  setup() {
    // const footer = ref();
    // const footerHeight = ref(0)
    // onMounted(() => {
    //   nextTick(() => {
    //     footerHeight.value = footer.value.clientHeight
    //   })
    // })

    return {
    //   footer,
    //   footerHeight,
    }
  }
})

</script>