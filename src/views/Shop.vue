<template>
  <div class="about">
    <NavBar title="Информация" name-page="Магазины"></NavBar>
      <div class="row">
        <div class="col-lg-8 offset-lg-3 mt-3">
          <div align="left">
            <h3 class="title">Инфо</h3>
          </div>
          <div class="card" align="left" style="margin-top: 24px; margin-bottom: 24px">
            <div class="card-title">
              <h4>Закажи товар на одном из Китайских сайтов на адрес Sunny Express.</h4>
            </div>
            <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы сможете забрать свою посылку из нашего офиса в Кишинёве.
              Заполни данные и получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные и получи доступ
              к возможностям Sunny Express. Красивая карточка. </p>
          </div>

          <div align="left" style="margin-bottom: 24px">
            <h3 class="title">Магазины</h3>
          </div>
            <div class="row row-cols-1 row-cols-lg-2 g-4">
              <ShopCard image-name="testShop.svg" shop-name="1688.com" goods="техника, вещи, техника, вещи, техника, вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
              <ShopCard image-name="testShop.svg" shop-name="Tmall" goods="вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
              <ShopCard image-name="testShop.svg" shop-name="Alibaba" goods="техника, техника, техника, вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
              <ShopCard image-name="testShop.svg" shop-name="Taobao" goods="вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
              <ShopCard image-name="testShop.svg" shop-name="1688.com" goods="техника, вещи, техника, вещи, техника, вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
              <ShopCard image-name="testShop.svg" shop-name="1688.com" goods="техника, вещи, техника, вещи, техника, вещи, техника, вещи" url-shop="https://www.google.com/"></ShopCard>
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
import ShopCard from '@/components/ShopCard'

export default {
  name: 'Home',
  components: {
    MenuBar, NavBar, ShopCard
  }
}
</script>
<style scoped>
.title{
  margin-left: 20px;
  font-size: 18px;
  color: #000000;
  font-weight: bold;
}
h4{
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.card{
  padding: 24px;
  margin: 0px 12px;
  border-radius: 8px;
}
h2{
  font-weight: bold;
  font-size: 32px;
  color: #000000;
}
p{
  font-weight: 500;
  font-size: 12px;
  color: #000000;
}
.row{
  margin: 0px !important;
}
</style>