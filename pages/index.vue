<template>
<div>
<Header />
<Link />
<Main />
</div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Link from '../components/Link.vue'
import Main from '../components/Main.vue'

export default {
  components: {
    Header,
    Link,
    Main
  }
}
</script>
