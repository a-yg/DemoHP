<template>
<div class="footer">
  <div class="links">
    <div class="link1">
      <p>コンテンツ</p>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
    </div>
    <div class="link2">
      <p>来場する</p>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
    </div>
    <div class="link3">
      <p>関連サービス</p>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
    </div>
    <div class="link4">
      <p>お問い合わせ</p>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
      <a href="#">ccccccc</a>
    </div>
    <div class="link5">
      <p>公式SNS</p>
      <a href="#" class="twitter"><span><img src="../img/twitter.png"></span><span>twitter</span></a>
      <a href="#" class="youtube"><span><img src="../img/youtube.png"></span><span>youtube</span></a>
      <a href="#" class="facebook"><span><img src="../img/facebook.png"></span><span>facebook</span></a>
    </div>
  </div>
  <div class="footer2">
    <div class="footer-text">
      <a href="#">プライバシーポリシー</a>
      <p>©︎HIKKY Co.Ltd All right reserverd.</p>
    </div>
    <div class="footer-ph">
      <img src="../img/footer1.png">
      <a href="#"><img src="../img/footer2.png"></a>
    </div>
  </div>
</div>
</template>

<style scoped>
a {
  list-style-type: none;
  text-decoration: none;
  color: hsla(0,0%,100%,.7);
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;

}
p {
  color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}
.footer {
  margin-top: 100px;
  background: linear-gradient(180deg,#00afaf,#005858);
  padding: 52px 15% 1px;
  position: relative;
}
.links {
  display: flex;
  justify-content: space-around;
  height: 300px;
}
.link1, .link2, .link3, .link4, .link5 {
  display: flex;
  flex-direction: column;
}
.link1 > a, .link2 > a, .link3 > a, .link4 > a, .link5 > a {
  margin: 5px;
}
.text {
  text-align: center;
}
.text > p {
  color: #fff;
    display: block;
    font-size: 12px;
    line-height: 1;
    margin: 0 auto;
}
.twitter > span > img {
  width: 19px;
  border-radius: 50px;
}
.youtube > span > img {
  width: 19px;
  border-radius: 50px;
}
.facebook > span > img {
  width: 19px;
  border-radius: 50px;
}
.footer-ph > img, .footer-ph > a > img {
  width: 110px;
}
.footer-ph {
  position: absolute;
  right: 370px;
  bottom: 60px;
}
.footer-text {
  text-align: center;
}

</style>