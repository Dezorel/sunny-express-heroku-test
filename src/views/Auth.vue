<template>
   <div class="row bg-color-yellow">
     <div class="col-lg-7 d-none d-lg-flex align-items-center justify-content-center reg-image">
       <img src="../assets/logo.svg" class="w-25 noselect" style="position: fixed">
     </div>
     <div class="card col-lg-5 d-flex align-items-center justify-content-center" style="padding-bottom: 128px; padding-top: 102px; padding-left: 24px; background-color: #E5E5E5;" align="center">

       <div class="card card-reg" style="padding-top: 24px">
         <div class="col-md">
           <h5 style="padding: 0px 24px;">
             Заходи и покупай <br> прямиком из Китая!
           </h5>
           <p style="margin: 24px">
             Заполни данные и получи доступ к возможностям <br> Sunny Express. Красивая карточка.
           </p>
         </div>
         <div class="col-md" style="margin-top: 22px; margin-left: 24px; margin-right: 24px">
           <form>
             <div class="row">
               <p class="col fake-label" align="left">Email</p>
             </div>
             <div class="form-outline">
               <input type="email" id="email" class="form-control" v-model="email" required>
             </div>
             <div class="row">
               <p class="col fake-label" align="left">Password</p>
             </div>
             <div class="form-outline">
               <input type="password" id="password" class="form-control" v-model="password" required>
             </div>

             <div class="col" style="margin-top: 24px">
               <a class="btn btn-block btn-yellow" @click="AuthComplete">Войти</a>
             </div>

             <div class="col mt-4">
               <div class="row">
                 <div class="col" align="left">
                   <p>Ещё нет аккаунта?</p>
                 </div>
                 <div class="col" align="right">
                   <router-link to="/register">
                     <a><p style="color:#EC7F00;">Регистрация</p></a>
                   </router-link>
                 </div>
               </div>
               <div class="row">
                 <div class="col" align="left">
                   <p>Забыли пароль?</p>
                 </div>
                 <div class="col" align="right">
                   <router-link to="/restore">
                     <a><p style="color:#EC7F00;">Восстановить</p></a>
                   </router-link>
                 </div>
               </div>
             </div>

           </form>
         </div>
         <div v-if="error" class="col-md-10 mt-5 alert alert-danger" role="alert">
           Вы ввели неправильные данные для авторизации! Проверьте их и попробуйте снова!
         </div>
       </div>

     </div>
   </div>
</template>

<script>
const authURL = 'https://delivery-spring.herokuapp.com/rest/auth/token'
import router from "@/router";
import axios from 'axios'

export default {
  name: "Auth",
  data(){
    return{
      email: null,
      password: null,
      key: null,
      createdOn: null,
      error: false,
    }
  },
  methods:{
    AuthComplete(){
       axios
            .post(authURL, {"email": this.email , "password": this.password})
            .then(response => {
              this.key = response.data.key
              localStorage.token = this.key
              router.push({ path: '/temp' })
            })
           // .then(response => (this.createdOn = response.data.created_on))
           //  .catch(error => alert("Ошибка! Вы ввели неверный пароль "+error))
            .catch(err => {
              this.error = true
              console.log(err)
            })
    }
  }
}

</script>

<style scoped>
h5{
  font-size: 24px;
  font-weight: 600;
  color: #000000;
}
p{
  font-weight: 500;
  font-size: 12px;
  color: #5F5F5F;
}
.card-reg{
  border-radius: 8px;
  background: url('../assets/card-image.svg') no-repeat;
  background-size: cover;
  padding-bottom: 24px;
}
.reg-image{
  height: 100vh;
}
.bg-color-yellow{
  background: linear-gradient(327.23deg, #FFED4B 1.75%, rgba(255, 255, 255, 0) 94.17%), #FFDA49;
}
.btn-yellow{
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
.fake-label{
  padding-left: 0px !important;
  margin-bottom: 0px;
  font-weight: 600;
  color: #000000;
}
.row{
  margin: 0px !important;
}
.form-outline{
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
}
.form-control{
  font-weight: 600!important;
  font-size: 14px!important;
}
</style>
