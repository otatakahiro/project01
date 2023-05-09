<template>
    <footer>
      <section>
        <h2>Marulilu Café</h2>
        <h2>Tel: (604)568-4211</h2>
      </section>

      <section class="menu-transition">
        <h3>MAIN MENU</h3>
        <article>
          <a href="#top">Top</a>
          <a href="#menu">Menu</a>
          <a href="#news">News</a>
          <a href="#access">Access</a>
        </article>
      </section>

        <section>
            <a href="https://www.instagram.com/marulilucafe/" class="insta_btn">
                <span class="insta">
                    <font-awesome-icon class="fab fa-instagram" icon="fa-brands fa-instagram" />
                </span>
            </a>
        </section>
    </footer>
</template>

<script>
export default {
    name:'FooterCompo'
}
</script>

<style scoped>
@media (min-width: 300px){

  footer {
        height: 60vh;
        background-color: #834f2f;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: white;
  }

  footer > section {
    border-bottom: 1px solid white;
    padding: 15px;
    height: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
  }

  footer > section:last-child {
    border: none;
  }

  h2:last-child {
    font-size: 20px;
  }

  h3 {
    font-size: 20px;
  } 

.menu-transition > article{
  display: flex;
  flex-direction: column;
}

.menu-transition a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: .5s;
}

.menu-transition a:hover {
  color: sandybrown;
}

.insta_btn {
  display: inline-block;
  text-align: left;/*中央揃え*/
  color: #2e6ca5;/*文字色*/
  font-size: 26px;/*文字サイズ*/
  text-decoration: none;/*下線消す*/
}

.insta {
  text-align: center;
}

.insta_btn:hover {/*ホバー時*/
  color:#668ad8;/*文字色*/
  transition: 0.5s;/*ゆっくり変化*/
}

.insta_btn .insta{/*アイコンの背景*/
  position: relative;/*相対配置*/
  display: inline-block;
  width: 50px;/*幅*/
  height: 50px;/*高さ*/
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;/*グラデーション①*/
  overflow: hidden;/*はみ出た部分を隠す*/
  border-radius: 15px;/*角丸に*/
}

.insta_btn .insta:before{/*グラデーションを重ねるため*/
  content: '';
  position: absolute;/*絶対配置*/
  top: 23px;/*ずらす*/
  left: -18px;/*ずらす*/
  width: 60px;/*グラデーションカバーの幅*/
  height: 60px;/*グラデーションカバーの高さ*/
  background: -webkit-radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);
  background: radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);/*グラデーション②*/
}

.insta_btn .fa-instagram {/*アイコン*/
  color: #FFF;/*白に*/
  position: relative;/*z-indexを使うため*/
  z-index: 2;/*グラデーションより前に*/
  top: 2.5px;
  font-size: 44px;/*アイコンサイズ*/
  line-height: 50px;/*高さと合わせる*/
}
}

@media (min-width:800px) {
  footer {
    height: 400px;
    font-size: 25px;
    letter-spacing: 2px;
  }

  footer > section {
    width: 40%;
  }

  .insta_btn .insta {
    width: 75px;
    height: 75px;
  }

  .insta_btn .fa-instagram {
    font-size: 70px;
  }
}
 
</style>