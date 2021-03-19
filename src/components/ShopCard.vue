<template>
    <div>
      <div class="col h-100">
        <div class="card h-100">
          <div class="row">
            <div class="col-3 card-image mb-2">
              <img :src="require(`../assets/${imageName}`)" class="card-img-top w-100"/>
            </div>
            <div class="col" align="left">
              <div class="card-body">
                <p class="card-title">{{shopName}}</p>
                <p class="card-text" style="height: 55px; overflow: hidden">
                  <span>Товары: </span>{{goods}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 offset-3">
            <a :href="urlShop" class="btn btn-block btn-yellow">Открыть сайт</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ShopCard",
  props:{
    imageName: String,
    shopName: String,
    goods: String,
    urlShop: String
  }
}
</script>

<style scoped>
.card{
  background: #FFFFFF;
  border-radius: 8px;
}
.btn-yellow{
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
.card-image{
  padding-top: 16px;
  margin-left: 16px;
}
.card-title{
  font-size: 12px;
  font-weight: 700;
}
.card-text{
  font-size: 12px;
  font-weight: 600;
  color: #9b9b9b;
}
.btn{
  margin-bottom: 16px;
}
span{
  color: black;
}
</style>