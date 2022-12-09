<script>
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    const data = ref({})
    onMounted( async () => {
      const route = useRoute()
      const params = route.value.params.id 
      const url = `https://jsonplaceholder.typicode.com/photos/${params}`
      try {
      const response = await axios.get(url)
      data.value = response.data
      console.log(data.value, 'data')
    } catch (error) {
        console.log("shop/get失敗")
      }
    })

    return {
      data
    }
  },
})
</script>

<template>
  <div>
    <h2>ショップaaa</h2>
    <p><img :src="data.url"></p>
    <p>{{ data.url }}</p>
    <p>{{ data.title }}</p>
  </div>
</template>