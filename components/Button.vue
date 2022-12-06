<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { ref } from 'vue'

export default defineComponent({
  setup() {

    return {
      
    }
  },
})
</script>


<template>
  <div class="button">
    <a href="https://vket6.v-market.work/"><img src="../img/button.png"></a>
    <button @click="onDelete">×</button>
  </div>
</template>

<style scoped>
.button > a > img {
  width: 120px;
}
.button {
  position: fixed;
  bottom: 20px;
  right: 40px;
}
.button > button {
  background-color: #ef529f;
  border: none;
  border-radius: 50px;
  color: #fff;
  width: 20px;
  font-size: 100%;
  padding: 0;
  position: fixed;
  cursor: pointer;
}
</style>