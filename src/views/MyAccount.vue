<template>
  <div>
    <NavBar title="Аккаунт" name-page="Личный кабинет"></NavBar>

<!--User Info-->
    <div class="row">
      <div class="col-lg-8 offset-lg-3" align="left" style="margin-top: 24px">
        <div class="card" style="margin-left: 24px; margin-right: 24px">
          <div style="border-radius: 8px 8px 0px 0px;margin-left: 24px; margin-top:24px;">
            <h3>User Information</h3>
          </div>
          <!--User info-->
          <div v-if="remoteAddress" class="card-text" style="margin-top: 24px">
            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>First Name</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!changefName">{{userInfo.fName}}</p>
                    <input  v-else class="form-control" v-model="newfName">
                  </div>
                  <div class="col-3">
                    <i :class="!changefName ? 'fas fa-edit' : 'fas fa-times'" @click="getNewfName"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-5 offset-md-1">
                <div class="row">
                  <span>Last Name</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!changelName">{{userInfo.lName}}</p>
                    <input  v-else class="form-control" v-model="newlName">
                  </div>
                  <div class="col-3">
                    <i :class="!changelName ? 'fas fa-edit' : 'fas fa-times'" @click="getNewlName"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>Phone number</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!changePhone">{{userInfo.phoneNumber ? userInfo.phoneNumber : 'Не указан'}}</p>
                    <input v-else class="form-control" v-model="newPhone">
                  </div>
                  <div class="col-3">
                    <i :class="!changePhone ? 'fas fa-edit' : 'fas fa-times'" @click="getNewPhone"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-5 offset-md-1">
                <div class="row">
                  <span>E-mail</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!changeEmail">{{userInfo.email}}</p>
                    <input v-else class="form-control" v-model="newEmail">
                  </div>
                  <div class="col-3">
                    <i :class="!changeEmail ? 'fas fa-edit' : 'fas fa-times'" @click="getNewEmail"></i>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>Password</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!changePassword">Нажмите что бы изменить</p>
                    <input v-else class="form-control" v-model="newPassword">
                  </div>
                  <div class="col-3">
                    <i :class="!changePassword ? 'fas fa-edit' : 'fas fa-times'" @click="getNewPassword"></i>
                  </div>
                </div>
              </div>

<!--              <div class="col-md-5 offset-md-1">-->
<!--                <div class="row">-->
<!--                  <span>some name</span>-->
<!--                </div>-->
<!--                <div class="row">-->
<!--                  <div class="col-9">-->
<!--                    <p v-if="!changeEmail">{{userInfo.email}}</p>-->
<!--                    <input v-else class="form-control" v-model="newEmail">-->
<!--                  </div>-->
<!--                  <div class="col-3">-->
<!--                    <i :class="!changeEmail ? 'fas fa-edit' : 'fas fa-times'" @click="getNewEmail"></i>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

            </div>

          </div>
          <p v-else class="position">Вы зашли как гость! Пожалуйста, авторизируйтесь!</p>
          <!--Конец User info-->

          <div v-if="changeEmail || changefName || changelName || changePassword || changePhone" class="row">
            <div class="col-lg-3 offset-lg-3 mb-3 mt-3">
              <a class="btn btn-block btn-warning" @click="POSTUpdate">Изменить</a>
            </div>
            <div class="col-lg-3 mb-3 mt-3">
              <a class="btn btn-block btn-danger" @click="ClearAll">Сбросить всё</a>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--Shipping info-->
    <div class="row">
      <div class="col-lg-8 offset-lg-3" align="left" style="margin-top: 24px">
        <div class="card" style="margin-left: 24px; margin-right: 24px">
          <div class="card-title" style="border-radius: 8px 8px 0px 0px; margin-left: 24px; margin-top:24px;">
            <h3>Shipping Information</h3>
          </div>
          <!--Shipping info-->
          <div v-if="remoteAddress" class="card-text" style="margin-top: 24px">

            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>Postal code</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p>{{userInfo.remoteAddress}}</p>
                  </div>
                  <div class="col-3">
                  </div>
                </div>
              </div>

              <div class="col-md-5  offset-md-1">
                <div class="row">
                  <span>District</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeDistrict">Укажите область</p>
                    <input v-else class="form-control" v-model="shipInf.newDistrict">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeDistrict ? 'fas fa-edit' : 'fas fa-times'" @click="getNewDistrict"></i>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-5">
                <div class="row">
                  <span>City</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeCity">Укажите город</p>
                    <input v-else class="form-control" v-model="shipInf.newCity">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeCity ? 'fas fa-edit' : 'fas fa-times'" @click="getNewCity"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-5  offset-md-1">
                <div class="row">
                  <span>Street</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeStreet">Укажите улицу</p>
                    <input v-else class="form-control" v-model="shipInf.newStreet">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeStreet ? 'fas fa-edit' : 'fas fa-times'" @click="getNewStreet"></i>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>Street number</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeStreetNumber">Укажите номер улицы</p>
                    <input v-else class="form-control" v-model="shipInf.newStreetNumber">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeStreetNumber ? 'fas fa-edit' : 'fas fa-times'" @click="getNewStreetNumber"></i>
                  </div>
                </div>
              </div>

              <div class="col-md-5  offset-md-1">
                <div class="row">
                  <span>Apartment number</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeApartmentNumber">Укажите номер квартиры</p>
                    <input v-else class="form-control" v-model="shipInf.newApartmentNumber">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeApartmentNumber ? 'fas fa-edit' : 'fas fa-times'" @click="getNewApartmentNumber"></i>
                  </div>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="col-md-5">
                <div class="row">
                  <span>Zip code</span>
                </div>
                <div class="row">
                  <div class="col-9">
                    <p v-if="!shipInf.changeZipCode">Укажите zip code</p>
                    <input v-else class="form-control" v-model="shipInf.newZipCode">
                  </div>
                  <div class="col-3">
                    <i :class="!shipInf.changeZipCode ? 'fas fa-edit' : 'fas fa-times'" @click="getNewZipCode"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <p v-else class="position">Вы зашли как гость! Пожалуйста, авторизируйтесь!</p>
          <!--Конец Shipping info-->
          <div v-if="shipInf.changeStreetNumber || shipInf.changeApartmentNumber || shipInf.changeZipCode || shipInf.changeStreet || shipInf.changeCity
          || shipInf.changeDistrict" class="row">
            <div class="col-lg-3 offset-lg-3 mb-3 mt-3">
              <a class="btn btn-block btn-warning" @click="POSTUpdateShiping">Изменить</a>
            </div>
            <div class="col-lg-3 mb-3 mt-3">
              <a class="btn btn-block btn-danger" @click="ClearAllShip">Сбросить всё</a>
            </div>
          </div>

        </div>
      </div>
    </div>


    <MenuBar></MenuBar>
  </div>
</template>

<script>
import router from "@/router";

const userInfoURL = 'https://delivery-spring.herokuapp.com/rest/user/userInfo'
const updateUserURL = 'https://delivery-spring.herokuapp.com/rest/user/updateUser'
const updateShipingInfoURL = 'https://delivery-spring.herokuapp.com/rest/user/setAddress'
import MenuBar from '@/components/MenuBar'
import NavBar from '@/components/NavBar'
import axios from "axios";

export default {
  name: "MyAccount",
  data(){
    return{
      userInfo: {},
      remoteAddress: null,
      infoPage: '',
      language: '',


      changeEmail: false,
      newEmail: null,
      changefName: false,
      newfName: null,
      changelName: false,
      newlName: null,
      changePassword: false,
      newPassword: null,
      changePhone: false,
      newPhone: null,

      shipInf:{
        changeDistrict: false,
        newDistrict: null,
        changeCity: false,
        newCity: null,
        changeStreet: false,
        newStreet: null,
        changeStreetNumber: false,
        newStreetNumber: null,
        changeApartmentNumber: false,
        newApartmentNumber: null,
        changeZipCode: false,
        newZipCode: null,
      }
    }
  },
  components: {
    MenuBar, NavBar
  },
  methods:{
    getInfoUser(){
      axios
          .get( userInfoURL, {
            headers: {
              'Authorization': localStorage.token
            }})
          .then(response => {
            this.userInfo = response.data
            this.remoteAddress = this.userInfo.remoteAddress
            localStorage.user = this.userInfo.role
          })
    },
    updateUserInfo(){
      axios
          .post( updateUserURL, {"email": this.newEmail, "fName": this.newfName, "lName": this.newlName, "password": this.newPassword, "phoneNumber": this.newPhone},
              {headers: {
              'Authorization': localStorage.token
            }})
          .then(response => {
            console.log(response)
            if(this.newfName){
              localStorage.fName = this.newfName
            }
            if(this.newlName){
              localStorage.lName = this.newlName
            }
          })
          .catch(error =>{
            console.log(error)
          })

    },
    updateShipingInfo(){
      axios
          .post( updateShipingInfoURL, {"apartmentNumber": this.shipInf.newApartmentNumber, "city": this.shipInf.newCity,
                "district": this.shipInf.newDistrict, "street": this.shipInf.newStreet, "streetNumber": this.shipInf.newStreetNumber,
                "zipCode": this.shipInf.newZipCode },
              {headers: {
                  'Authorization': localStorage.token
                }})
          .then(response => {
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })

    },
    getNewfName(){
      this.newfName = this.userInfo.fName
      this.changefName = !this.changefName
    },
    getNewlName(){
      this.newlName = this.userInfo.lName
      this.changelName = !this.changelName
    },
    getNewPhone(){
      this.newPhone = this.userInfo.phoneNumber
      this.changePhone = !this.changePhone
    },
    getNewEmail(){
      this.newEmail = this.userInfo.email
      this.changeEmail = !this.changeEmail
    },
    getNewPassword(){
      this.newPassword = null
      this.changePassword = !this.changePassword
    },

    getNewStreetNumber(){
      this.shipInf.newStreet = null
      this.shipInf.changeStreetNumber = !this.shipInf.changeStreetNumber
    },
    getNewApartmentNumber(){
      this.shipInf.newApartmentNumber = null
      this.shipInf.changeApartmentNumber = !this.shipInf.changeApartmentNumber
    },
    getNewZipCode(){
      this.shipInf.newZipCode = null
      this.shipInf.changeZipCode = !this.shipInf.changeZipCode
    },
    getNewStreet(){
      this.shipInf.newStreet = null
      this.shipInf.changeStreet = !this.shipInf.changeStreet
    },
    getNewCity(){
      this.shipInf.newCity = null
      this.shipInf.changeCity = !this.shipInf.changeCity
    },
    getNewDistrict(){
      this.shipInf.newDistrict = null
      this.shipInf.changeDistrict = !this.shipInf.changeDistrict
    },

    POSTUpdate(){
      this.updateUserInfo()
      router.go()
      this.changeEmail = false
      this.changefName = false
      this.changelName = false
      this.changePassword = false
      this.changePhone = false
    },
    POSTUpdateShiping(){
      this.updateShipingInfo()
      router.go()
      this.shipInf.changeApartmentNumber = false
      this.shipInf.changeStreetNumber = false
      this.shipInf.changeZipCode = false
      this.shipInf.changeStreet = false
      this.shipInf.changeCity = false
      this.shipInf.changeDistrict = false
    },
    ClearAll(){
      this.newfName = this.userInfo.fName
      this.newlName = this.userInfo.lName
      this.newPhone = this.userInfo.phoneNumber
      this.newEmail = this.userInfo.email
      this.newPassword = null

      this.changeEmail = false
      this.changefName = false
      this.changelName = false
      this.changePassword = false
      this.changePhone = false
    },
    ClearAllShip(){
      this.shipInf.newZipCode = null
      this.shipInf.newStreetNumber = null
      this.shipInf.newApartmentNumber = null
      this.shipInf.newStreet = null
      this.shipInf.newCity = null
      this.shipInf.newDistrict = null

      this.shipInf.changeApartmentNumber = false
      this.shipInf.changeStreetNumber = false
      this.shipInf.changeZipCode = false
      this.shipInf.changeStreet = false
      this.shipInf.changeCity = false
      this.shipInf.changeDistrict = false
    }
  },
  created() {
    this.language = localStorage.language

    this.getInfoUser()
  },

  watch:{
    remoteAddress(){
      localStorage.remoteAddress = this.remoteAddress
    },
    language(){
      switch (this.language){
        case '0':
          this.infoPage = 'This is account page!'
          break
        case '1':
          this.infoPage = 'Aceasta este pagina contului'
          break
        case '2':
          this.infoPage = 'Это страница аккаунта'
          break
        case '3':
          this.infoPage = '这是帐户页面'
          break
      }
    }
  }
}
</script>

<style scoped>
.fa-edit,.fa-times{
  cursor: pointer;
  font-size: 14px;
  color: black
}
.card{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
h3{
  font-weight: bold;
  font-size: 24px;
  color: #000000;
}
.position{
  padding-top: 24px;
  padding-left: 24px;
  padding-bottom: 16px;
}
span{
  color: #9B9B9B;
  font-weight: bold;
  font-size: 12px;
}
p{
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
.row{
  margin: 0px !important;
}
</style>