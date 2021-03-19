<template>
  <div class="row select">
    <div class="col-1 menu-item">
      <i v-bind:class="'fas fa-'+imageName"></i>
    </div>
    <div class="col-10">
      <p class="element menu-item" style="margin-top: 7px">{{name}}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "MenuItem",
  props:{
    name:String,
    imageName: String
  }
}
</script>

<style scoped>
.select{
  max-height: 33px;
  margin-bottom: 10px;
}
.menu-item{
  margin-top: 5px;
}
.element{
  font-weight: 700;
  font-size: 12px;
}
#nav a.router-link-exact-active img{
  filter: brightness(0);
}
</style>
