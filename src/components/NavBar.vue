<template>
  <div class="nav-menu">
      <div class="row info">
        <div class="col-5 offset-lg-3 offset-md-1" style="padding-left: 32px">
            <div class="row">
              <div class="col title" align="left">{{title}}</div>
            </div>
            <div class="row">
              <div class="col description" align="left">{{namePage}}</div>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-4 offset-xl-2 offset-md-2 offset-3" style="margin-top: 14px" align="center">
          <select type="text" class="form-control language" style="width: 64px" v-model="language">
            <option value="0">En</option>
            <option value="1">Md</option>
            <option value="2">Ru</option>
            <option value="3">Cny</option>
          </select>
            <i class="fas fa-sort-down" style="margin-left: -25px"></i>
        </div>
      </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  props:{
    title: String,
    namePage: String
  },
  data(){
    return{
      language: localStorage.language
    }
  },
  watch:{
    language(){
      switch (this.language){
        case '0':
          console.log('en')
          localStorage.language = this.language
          break
        case '1':
          console.log('md')
          localStorage.language = this.language
          break
        case '2':
          console.log('ru')
          localStorage.language = this.language
          break
        case '3':
          console.log('cny')
          localStorage.language = this.language
          break
      }
      router.go()
    }
  },
  beforeCreate() {
    if(localStorage.language == undefined){
      localStorage.language = 0
    }
  }
}
</script>

<style scoped>
select{
  display: inline-block;
}
.title{
  font-size: 12px;
  color: #9b9b9b;
  font-weight: 700;
}
.description{
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
}
.nav-menu{
  background-color: #f1f1f1;
}
.info{
  padding-top: 24px;
  padding-bottom: 24px;
}
.row.info{
  margin: 0px !important;
}
.language{
  border: none;
  background: none;
}
.language:active,.language:focus,.language:checked{
  border: none;
}
@media(max-width: 768px){
  .title,.description{
    margin-top: 10px;
    margin-left: 26px;
  }
}
</style>
