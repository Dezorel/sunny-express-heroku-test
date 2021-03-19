<template>
  <div class="page bg-color-yellow">
    <div class="row" align=" left">
      <div class="col-lg-7 d-none d-lg-flex align-items-center justify-content-center reg-image">
        <img src="../assets/logo.svg" style="position: fixed" class="noselect" />
      </div>
      <div class="card col-lg-5 d-flex align-items-center justify-content-center" style="padding: 24px; background-color: #E5E5E5;" align="center">

      <div class="card card-reg" style="padding-top: 24px">
          <div class="col-md" style="padding-left: 10px">
            <h5 style="padding: 0px 24px;">
              Зарегестрируйся и <br> покупай в Китае, друг!
            </h5>
            <p style="margin: 24px">
              Заполни данные и получи доступ к возможностям <br> Sunny Express. Красивая карточка.
            </p>
          </div>
          <form class="row" @submit.prevent="Register" style="display: inline-block">

            <div class="row">
              <div class="form-outline">
                <p class="col fake-label" align="left">First name</p>
                <input type="text" class="form-control" v-model="fname" required/>
              </div>
            </div>

            <div class="row">
              <div class="form-outline">
                <p class="col fake-label" align="left">Last name</p>
                <input type="text" class="form-control" v-model="lname" required/>
              </div>
            </div>

            <div class="row">
              <div class="form-outline">
                <p class="col fake-label" align="left">Mobile number</p>
                <input type="number" min="0" class="form-control" v-model="mobile" required/>
              </div>
            </div>

            <div class="row">
              <div class="form-outline">
                <p class="col fake-label" align="left">Email</p>
                <input type="email" class="form-control" v-model="email" required/>
              </div>
            </div>

            <div class="row">
              <div class="form-outline" style="margin-bottom: 24px">
                <p class="col fake-label" align="left">Password</p>
                <input type="password" class="form-control" v-model="password" required/>
              </div>
            </div>

            <div class="row">
             <div class="col">
               <button class="btn btn-block btn-yellow" type="submit">Регистрация</button>
             </div>
            </div>
          </form>


          <div class="row">
            <div class="col" style="margin-left: 14px" align="left">
              <p>Уже есть аккаунт?</p>
            </div>
            <div class="col" style="margin-right: 14px" align="right">
              <router-link to="/auth">
                <a><p style="color:#EC7F00;">Авторизоваться</p></a>
              </router-link>
            </div>
          </div>

        <div v-if="errorReg" class="col-md" style="margin:0px 30px">
          <div class="alert alert-danger" role="alert">
            Ошибка, возможно такая почта уже используется. <br> Попробуйте снова!
          </div>
        </div>
        <div v-if="successReg" class="col-md" style="margin:0px 30px">
          <div class="alert alert-success" role="alert">
            Регистрация прошла успешно!
          </div>
        </div>

        </div>


      </div>
    </div>

    </div>

</template>

<script>
const registerURL = 'https://delivery-spring.herokuapp.com/sign-in/register'
import axios from "axios";
//import router from "@/router";

export default {
name: "Register",
  data(){
    return{
      errorReg: false,
      successReg:false,
      fname: '',
      lname: '',
      mobile: '',
      email: '',
      password: ''
    }
  },
  methods:{
    Register(){
      axios
          .post(registerURL, {"email": this.email , "password": this.password, "fName": this.fname, "lName": this.lname, "phoneNumber": this.mobile})
          .then(response => {
            this.successReg = true
            console.log(response)
            // router.push({path: '/auth'})
          })
          .catch(error => {
            if(error.response.status === 409){
              this.errorReg = true
            }else
            {
              console.log(error)
            }
          })
    }
  }
}
</script>

<style scoped>
.btn-yellow{
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
.reg-image{
  height: 100vh;
}
.bg-color-yellow{
  background: linear-gradient(327.23deg, #FFED4B 1.75%, rgba(255, 255, 255, 0) 94.17%), #FFDA49;
}
h5{
  font-size: 24px;
  font-weight: 600;
  color: #000000;
}
p{
  font-size: 12px;
  font-weight: 500;
}
.fake-label{
  font-weight: 600;
  color: #000000;
}
.card-reg{
  border-radius: 8px;
  background: url('../assets/card-image.svg') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  padding-bottom: 24px;
}
.row{
  margin: 0px !important;
}
.btn{
  text-transform: uppercase;
  margin-bottom: 32px;
}
.form-control{
  margin-top: 8px;
  border: 1px solid black;
  margin-bottom: 16px;

  font-weight: 600!important;
  font-size: 14px!important;

}
@media(max-width: 767px) {
  .reg{
    padding-left: 0px;
  }
  .card{
    padding-top: 30px;
    max-height: none !important;
  }
}
</style>
