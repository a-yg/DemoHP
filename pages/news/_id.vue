<script>
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    const detail = ref({})
    onMounted( async () => {
      const route = useRoute()
      const params = route.value.params.id 
      const url = `https://jsonplaceholder.typicode.com/posts/${params}`
      try {
      const response = await axios.get(url)
      detail.value = response.data
      console.log(detail.value, 'detail')
    } catch (error) {
        console.log("news/get失敗")
      }
    })

    return {
      detail
    }
  },
})
</script>




<template>
  <div>
    <h2>お知らせ</h2>
    <p>{{ detail.title }}</p>
    <p>{{ detail.body }}</p>
  </div>
</template>