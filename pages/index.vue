<template>
  <div>
    <!-- <Header2 /> -->
    <Header />
    <AdLink />
    <SetLists />
    <AdFixed  />
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
import AdLink from '../components/AdLink.vue'
import SetLists from '../components/SetLists.vue'
import Footer from '../components/Footer.vue'
import AdFixed from '../components/AdFixed.vue'

import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  components: {
    Header,
    AdLink,
    SetLists,
    Footer,
    AdFixed
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