<template>
  <div>
    <Header />
    <Button />
    <Link />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import 'normalize.css'
import Header from '../components/Header.vue'
import Link from '../components/Link.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'

export default {
  components: {
    Header,
    Link,
    Main,
    Footer,
    Button
  }
}
</script>