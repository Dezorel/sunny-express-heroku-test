<template>
  <div>
    <NavBar title="Аккаунт" name-page="Отчёты"></NavBar>


    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 16px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h2>Инфо</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-3">
        <div class="card" style="margin: 0px 24px">
          <div style="margin: 24px" align="left">
            <h3>Закажи товар на одном из Китайских сайтов на адрес Sunny Express.</h3>
            <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы сможете забрать
              свою посылку из нашего офиса в Кишинёве. Заполни данные и получи доступ к возможностям
              Sunny Express. Красивая карточка. Заполни данные и получи доступ к возможностям Sunny Express.
              Красивая карточка. </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 24px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h2>Поиск</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-3">
        <div class="row">
          <div class="col-md-7 mt-2">
            <div class="card" style="margin:0px 16px">
             <div class="card-body">
               <div class="row">
                 <div class="col-md-7 mb-1 mt-1">
                   <input type="text" class="form-control" v-model="trackCode" placeholder="Paste Track Code">
                 </div>
                 <div class="col-md-5">
                   <a class="btn btn-sm btn-yellow mt-1" @click="findByTrackCode">Search</a>
                 </div>
               </div>
             </div>
            </div>
          </div>
          <div class="col-md-5 mt-2">
            <div class="card" style="margin: 0px 16px">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-7 mb-1 mt-1">
                    <input type="text" class="form-control" v-model="remoteAddress" placeholder="Post ID">
                  </div>
                  <div class="col-md-5">
                    <a class="btn btn-sm btn-yellow mt-1" @click="findByRemoteAddress">Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 16px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h2>Инфо</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-3">
        <div v-if="getByTrack" class="card" style="margin: 0px 24px">
          <div style="margin: 24px" align="left">

            <div class="row">
              <div class="col-md-5">
                <h3>Track code: {{getByTrack.trackCode}}</h3>
              </div>
              <div class="col-md-7" align="left">
                <div class="row">
                  <div v-if="getByTrack.itemCheck" class="col-1 mb-4 d-flex align-items-center">
                    <i class="fas fa-check-square items-options" data-toggle="tooltip" title="This is item check"></i>
                  </div>
                  <div v-if="getByTrack.itemInsurance" class="col-1 mb-4 d-flex align-items-center">
                    <i class="fas fa-file-invoice-dollar items-options" data-toggle="tooltip" title="This is item insurance"></i>
                  </div>
                  <div v-if="getByTrack.itemPhoto" class="col-1 mb-4 d-flex align-items-center">
                    <i class="fas fa-camera items-options" data-toggle="tooltip" title="This is item photo"></i>
                  </div>
                  <div v-if="getByTrack.itemRepack" class="col-1 mb-4 d-flex align-items-center">
                    <i class="fas fa-box-open items-options" data-toggle="tooltip" title="This is item repack"></i>
                  </div>
                  <div v-if="getByTrack.itemSplit" class="col-1  mb-4 d-flex align-items-center">
                    <i class="fas fa-boxes items-options" data-toggle="tooltip" title="This is item split"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5">
                <span>Item Type</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{ getByTrack.itemType }}</p>
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Created Date</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{ getByTrack.createdDate }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <span>User ID</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{ getByTrack.user.remoteAddress }}</p>
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Amount</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{ getByTrack.amount }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <span>Item Note</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByTrack.itemNotes ? getByTrack.itemNotes : 'Не указан'}}</p>
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Price</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByTrack.price}} {{getByTrack.currency}}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5">
                <span>Length</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p v-if="getByTrack.length" class="info-text">{{getByTrack.length}}</p>
                <input v-else v-model="length" type="text" class="form-control">
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Weight</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p v-if="getByTrack.weight" class="info-text">{{getByTrack.weight}}</p>
                <input v-else v-model="weight" type="text" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5" align="left">
                <span>Width</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p v-if="getByTrack.width" class="info-text">{{getByTrack.width}}</p>
                <input v-else v-model="width" type="text" class="form-control">
              </div>
              <div class="col-sm-5 offset-sm-2">
                <span>Height</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p v-if="getByTrack.height" class="info-text">{{getByTrack.height}}</p>
                <input v-else v-model="height" type="text" class="form-control">
              </div>
            </div>
            <!--Photo-->
            <div v-if="getByTrack.itemPhoto">
              <div class="row">
                <div class="col">
                  <span>Photo</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                  <div class="col-md-6">
                    <input id="input" type="file" class="form-control" multiple="multiple" />
                  </div>
                </div>


                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="container" align="center">
                          <img v-if="selectimg4" :src=img4 style="width: 100%" alt="">
                          <img v-if="selectimg3" :src=img3 style="width: 100%" alt="">
                          <img v-if="selectimg2" :src=img2 style="width: 100%" alt="">
                          <img v-if="selectimg1" :src=img1 style="width: 100%" alt="">
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7">
                  <a class="btn btn-yellow btn-block mt-2" @click="getPhoto()">Добавить фото</a>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-lg-4 g-4" align="center">
                <div class="col">
                  <div class="card photo-card h-100 d-flex justify-content-center">
                    <img data-mdb-toggle="modal" id="userImage1"
                         data-mdb-target="#exampleModal"
                         :src=img1
                         class="card-img-top" @click="selectimg1 = true; selectimg4 = false; selectimg2= false; selectimg3 = false"/>
                  </div>
                </div>
                <div class="col">
                  <div class="card photo-card h-100 d-flex justify-content-center">
                    <img data-mdb-toggle="modal"
                         data-mdb-target="#exampleModal"
                         :src=img2
                         class="card-img-top" @click="selectimg2 = true; selectimg1 = false; selectimg4= false; selectimg3 = false"/>
                  </div>
                </div>
                <div class="col">
                  <div class="card photo-card h-100 d-flex justify-content-center">
                    <img data-mdb-toggle="modal"
                         data-mdb-target="#exampleModal"
                         :src=img3
                         class="card-img-top" @click="selectimg3 = true; selectimg1 = false; selectimg2= false; selectimg4 = false"/>
                  </div>
                </div>
                <div class="col">
                  <div class="card photo-card h-100 d-flex justify-content-center">
                    <img data-mdb-toggle="modal"
                         data-mdb-target="#exampleModal"
                         :src=img4
                         class="card-img-top" @click="selectimg4 = true; selectimg1 = false; selectimg2= false; selectimg3 = false"/>
                  </div>
                </div>
              </div>


            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-7">
                <a class="btn btn-block btn-yellow mt-2" @click="sendPackage">Сохранить</a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="getByAddress" class="card" style="margin: 0px 24px">
          <div style="margin: 24px" align="left">

            <div class="row">
              <div class="col-md-5">
                <h3>User: {{getByAddress.fName}} {{getByAddress.lName}}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <span>Email</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByAddress.email}}</p>
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Remote Address</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByAddress.remoteAddress}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <span>Phone Number</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByAddress.phoneNumber}}</p>
              </div>
              <div class="col-sm-5 offset-sm-2" align="left">
                <span>Remote Address</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
                <p class="info-text">{{getByAddress.createdDate}}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-7">
              <a class="btn btn-block btn-yellow mt-2 mb-3" @click="sendEmail">Отправить уведомление</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MenuBar></MenuBar>
  </div>
</template>

<script>

import axios from "axios";

const uploadPhotoURL = 'https://delivery-spring.herokuapp.com/rest/upload/uploadPackagePhoto'
const userInfoURL = 'https://delivery-spring.herokuapp.com/rest/user/userInfo'
const getInfoByTrackCodeURL = 'https://delivery-spring.herokuapp.com/rest/operator/findByTrackCode'
const getInfoByRemoteAddressURL = 'https://delivery-spring.herokuapp.com/rest/operator/findByRemoteAddress'
const sendPackageURL = 'https://delivery-spring.herokuapp.com/rest/operator/validatePackage'
const sendEmailNotification = 'https://delivery-spring.herokuapp.com/rest/operator/sendEmailNotification'

import MenuBar from '@/components/MenuBar'
import NavBar from '@/components/NavBar'
import router from "@/router";

export default {
name: "Report",
  components: {
    MenuBar, NavBar
  },
  data(){
  return{
    length: null,
    weight:null,
    width:null,
    height:null,

    photosUser: null,

    img1: null,
    img2: null,
    img3: null,
    img4: null,

    selectimg1: false,
    selectimg2: false,
    selectimg3: false,
    selectimg4: false,

    trackCode: null,
    remoteAddress: null,

    getByTrack: null,
    getByAddress: null,
  }
  },
  methods:{
  getPhoto(){
    this.photosUser = document.getElementById('input').files
    this.img1 = URL.createObjectURL(this.photosUser[0])
    this.img2 = URL.createObjectURL(this.photosUser[1])
    this.img3 = URL.createObjectURL(this.photosUser[2])
    this.img4 = URL.createObjectURL(this.photosUser[3])

    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        }))

    toDataURL(this.img1)
        .then(dataUrl => {
         localStorage.img1= dataUrl
        })
    toDataURL(this.img2)
        .then(dataUrl => {
          localStorage.img2= dataUrl
        })
    toDataURL(this.img3)
        .then(dataUrl => {
          localStorage.img3= dataUrl
        })
    toDataURL(this.img4)
        .then(dataUrl => {
          localStorage.img4= dataUrl
        })
  },
  uploadPhotos(){
      if(this.photosUser){
        axios
            .post(uploadPhotoURL, {"image1": localStorage.img1 , "image2": localStorage.img2,"image3": localStorage.img3 , "image4": localStorage.img4}
            ,
                //TODO отправить packageID
                {
                  headers: {
                    'Authorization': localStorage.token
                  }}
            )
            .then(response => {
              console.log(response)
              localStorage.removeItem('img1')
              localStorage.removeItem('img2')
              localStorage.removeItem('img3')
              localStorage.removeItem('img4')
            })
            .catch(err => {
              console.log(err)
            })
      }
    },
  findByTrackCode(){
    this.remoteAddress = null
    axios
        .get( getInfoByTrackCodeURL +'?trackCode='+this.trackCode, { headers: {
            'Authorization': localStorage.token
          }})
        .then(response => {
          this.getByTrack = response.data
        })
        .catch(err => {
          console.log(err)
        })
  },
  findByRemoteAddress(){
    this.trackCode = null
    axios
        .get( getInfoByRemoteAddressURL+'?remoteAddress='+this.remoteAddress, { headers: {
            'Authorization': localStorage.token
          }})
        .then(response => {
          this.getByAddress = response.data
        })
  },
  sendPackage(){
    this.uploadPhotos()
      axios
          .post( sendPackageURL, {"weight":this.weight, "height":this.height, "width":this.width, "length":this.length, "packageRequestId":this.getByTrack.id},
              { headers: {
              'Authorization': localStorage.token
            }})
          .then(response => {
            console.log(response)
            alert("Успех")
            router.go()
          })
    },
  sendEmail(){
    axios
        .post( sendEmailNotification, {"id":this.getByAddress.id},
            { headers: {
                'Authorization': localStorage.token
              }})
        .then(response => {
          console.log(response)
          alert("Успех")
          router.go()
        })
    },
  },
  created() {
    axios
        .get( userInfoURL, {
          headers: {
            'Authorization': localStorage.token
          }})
        .then(response => {
          this.userInfo = response.data
          this.role = this.userInfo.role

          if(this.userInfo.role.toLowerCase() != 'operator' && this.userInfo.role.toLowerCase() != 'admin'){
            localStorage.user = this.userInfo.role
            router.push({path: '/temp'})
          }
        })

  }
}
</script>

<style scoped>
.info-text{
  font-weight: bold;
  font-size: 16px;
}
select{
  display: inline-block;
}
.fas{
  color: black;
  font-size: 14px;
}
.fa{
  color: #9B9B9B;
}
span{
  color: #9B9B9B;
  font-weight: bold;
  font-size: 12px;
}
.form-control{
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}
.card{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0px !important;
}
h2{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
h3{
  font-weight: bold;
  font-size: 24px;
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
.btn-yellow{
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
</style>