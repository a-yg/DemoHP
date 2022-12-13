import { ref } from 'vue'
import axios from 'axios'

export const useItems = () => {
  const detail = ref();

  const fetchGetitems = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts"
        try {
        const response = await axios.get(url)
        detail.value = response.data.slice(0,5)
        console.log(detail.value, 'detail@@@@')
      } catch (error) {
          console.log("get失敗")
        }
  }

  return { fetchGetitems, detail }
}


