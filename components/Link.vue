<template>
  <div>
    <div class="link">
      <div class="link1">
        <img src="../img/link2.png" alt="">
        <img src="../img/link3.png" alt="">
        <img src="../img/link4.png" alt="">
      </div>
      <div class="link2">
        <img src="../img/link5.png" alt="">
        <img src="../img/link6.jpg" alt="">
      </div>
      <div class="link3">
        <img src="../img/link7.png" alt="">
        <img src="../img/link8.png" alt="">
        <img src="../img/message.png" class="img" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  margin-top: 30px;
}
.link1, .link2 {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px;
}
.link1 img, .link2 img {
  width: 23%;
}
.link3 {
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link3 img {
  margin: 10px;
}
.img {
  width: 36%;
}
</style>