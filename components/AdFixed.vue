<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { ref, toRef } from 'vue'

export default defineComponent({
  // props: {
  //   footerHeight: Number
  // },
  setup(props) {
    // onMounted(() => {
    //   window.addEventListener('scroll', getScroll)
    // })
    // const button = ref()
    // const scrollY = ref(0)
    // const getScroll = () => {
    //   scrollY.value = window.scrollY
    //   if (scrollY.value > 5200 - props.footerHeight) {
    //     button.value.style.marginBottom = "50px"
    //   } else {
    //     button.value.style.margin = "0"
    //   }
    // }

    const isDisplay = ref(true)
    const onDelete = () => {
      isDisplay.value = false
    }
    return {
      // button,
      // scrollY,
      // getScroll,
      isDisplay,
      onDelete,
    }
  },
})
</script>


<template>
<!-- 5429 -->
<!-- 5005 -->
  <div ref="button" class="button" v-if="isDisplay">
    <!-- <div class="button2"> -->
      <button @click="onDelete">×</button>
      <a href="https://vket6.v-market.work/"><img src="../assets/img/button.png"></a>
    <!-- </div> -->
  </div>
</template>

<style scoped>

.button > a > img {
  width: 120px;
}
.button {
  position: sticky;
  bottom: 71px;
  display: flex;
  justify-content: end;
  padding-right: 20px;
}
.button > button {
  background-color: #ef529f;
  border: none;
  border-radius: 50px;
  color: #fff;
  width: 20px;
  font-size: 100%;
  cursor: pointer;
  position: absolute;
  right: 10px;
}
button:hover, .button > a > img:hover {
  filter: opacity(70%);
  cursor: pointer;
}
</style>