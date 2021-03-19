<template>
  <div class="home">
    <NavBar title="Информация" name-page="Инструкция"></NavBar>

    <div class="row bg-image">

      <div class="col-md offset-md-3" align="left" style="padding-top: 24px;">

        <img src="../assets/logo.svg" class="logo-img noselect" >
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7">
            <h2 style="margin-top: 16px">Покупай в Китае без проблем.</h2>
            <p>
              5 простых шагов и вы получите свой товар из Китая в Молдове. 5 простых шагов и вы получите свой товар из Китая в Молдове.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-7">
            <div style="margin-top: 32px; margin-bottom: 32px">
              <a href="#" class="btn btn-block btn-yellow">Читать</a>
            </div>
          </div>
        </div>

      </div>
      </div>


    <div class="row" style="background: #FFDA49">
      <div class="col-md-8 offset-md-3" style="margin-top: 24px">

        <div class="card" align="left" style="padding: 24px; margin-bottom: 24px">
          <div class="card-title">
            <h2>Закажи товар на одном из Китайских сайтов на адрес Sunny Express.</h2>
          </div>
          <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы
              сможете забрать свою посылку из нашего офиса в Кишинёве. Заполни данные и
              получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные
              и получи доступ к возможностям Sunny Express. Красивая карточка.</p>
        </div>

        <div class="card" align="left" style="padding: 24px; margin-bottom: 24px">
          <div class="card-title">
            <h2>Укажи track code посылки и информацию о твоем товаре на сайте.</h2>
          </div>
          <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы
            сможете забрать свою посылку из нашего офиса в Кишинёве. Заполни данные и
            получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные
            и получи доступ к возможностям Sunny Express. Красивая карточка.</p>
        </div>

        <div class="card" align="left" style="padding: 24px; margin-bottom: 24px">
          <div class="card-title">
            <h2>Закажи дополнительные услуги.</h2>
          </div>
          <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы
            сможете забрать свою посылку из нашего офиса в Кишинёве. Заполни данные и
            получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные
            и получи доступ к возможностям Sunny Express. Красивая карточка.</p>
        </div>

        <div class="card" align="left" style="padding: 24px; margin-bottom: 24px">
          <div class="card-title">
            <h2>После доставки, забери посылку из офиса!</h2>
          </div>
          <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы
            сможете забрать свою посылку из нашего офиса в Кишинёве. Заполни данные и
            получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные
            и получи доступ к возможностям Sunny Express. Красивая карточка.</p>
        </div>

      </div>
    </div>

    <MenuBar></MenuBar>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar'
import NavBar from '@/components/NavBar'
export default {
  name: 'Instruction',
  components: {
    MenuBar, NavBar
  },
  data(){
    return{
      language: '',
      message: '',


    }
  },
  created() {
    this.language = localStorage.language
  },
  watch: {
    language() {
      switch (this.language) {
        case '0':
          this.message = 'This is an instruction page'
          break
        case '1':
          this.message = 'Aceasta este o pagină de instrucțiuni'
          break
        case '2':
          this.message = 'Это страница инструкции'
          break
        case '3':
          this.message = '这是说明页'
          break
      }
    }
  },
}
</script>

<style scoped>
.row{
  margin: 0px !important;
}
h2{
  color: #000000;
  font-weight: 600;
  font-size: 32px;
}
p{
  color: #000000;
  font-weight: 500;
  font-size: 12px;
}
.logo-img{
  width: 10%;
}
.btn-yellow{
  text-transform: uppercase;
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
.bg-image{
  padding-bottom: 800px;
  background: url("../assets/instruction-image.svg") no-repeat;
  background-size: cover;
}
@media (max-width: 1600px) {
  .bg-image{
    padding-bottom: 600px;
  }
  .logo-img{
    width: 15%;
  }
}
@media (max-width: 1250px) {
  .bg-image{
    padding-bottom: 350px;
  }
  .logo-img{
    width: 25%;
  }
}
@media (max-width:600px) {
  .logo-img{
    width: 50%;
  }
}
</style>
