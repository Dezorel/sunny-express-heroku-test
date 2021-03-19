<template>
    <div class="card mb-3" style="margin-left:16px;margin-right:16px">
        <div class="row" style="margin-top: 16px;">
          <div class="col-md-3">
            <p>{{title}}</p>
          </div>
          <div class="col-md-3 offset-md-6">
           <p> <span>Все товары:</span> {{countOfPackage ? countOfPackage : '0'}}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PackageList",
  props:{
    title: String,
    countOfPackage: Number
  }
}
</script>

<style scoped>
p{
  color: #000000;
  font-weight: 600;
  font-size: 12px;
}
span{
  color: #9B9B9B;
}
</style>