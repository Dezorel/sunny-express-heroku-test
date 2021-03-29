<template>
  <div class="card mb-3" style="margin-left: 16px; margin-right: 16px" align="left">
    <div class="row">
        <div class="card-body">
          <div class="row" style="line-height: 0.5; font-size: 30px;">
            <div class="col-xl-3">
              <h5 class="card-title">Information</h5>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div v-if="this.itemCheck" class="col-1 mb-4 d-flex align-items-center">
                  <i class="fas fa-check-square items-options" data-toggle="tooltip" title="This is item check"></i>
                </div>
                <div v-if="this.itemInsurance" class="col-1 mb-4 d-flex align-items-center">
                  <i class="fas fa-file-invoice-dollar items-options" data-toggle="tooltip" title="This is item insurance"></i>
                </div>
                <div v-if="this.itemPhoto" class="col-1 mb-4 d-flex align-items-center">
                  <i class="fas fa-camera items-options" data-toggle="tooltip" title="This is item photo"></i>
                </div>
                <div v-if="this.itemRepack" class="col-1 mb-4 d-flex align-items-center">
                  <i class="fas fa-box-open items-options" data-toggle="tooltip" title="This is item repack"></i>
                </div>
                <div v-if="this.itemSplit" class="col-1  mb-4 d-flex align-items-center">
                  <i class="fas fa-boxes items-options" data-toggle="tooltip" title="This is item split"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <span>Item Type</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{itemType}}</p>
            </div>
            <div class="col-sm-4" align="left">
              <span>Location</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p :class="(status == 'Создано') ? 'expected' : '' || (status == 'Ошибка') ? 'received' : '' || (status == 'Оплачено') ? 'closed' : ''
                    || (status == 'Ожидает оплаты') ? 'waitMoney' : '' || (status == 'Ожидает отправки') ? 'waitMoney' : ''
                    || (status == 'Отправлено') ? 'waitMoney' : ''">{{status}}</p>
            </div>
            <div class="col-sm-4">
              <span>Track Number</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{trackNumber}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <span>Item Note</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{link}}</p>
            </div>
            <div class="col-sm-4" align="left">
              <span>Amount</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{amount}} шт.</p>
            </div>
            <div class="col-sm-4" align="left">
              <span>Price</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{price}} {{currency}}</p>
            </div>
          </div>
          <div class="row">
            <div v-if="weight" class="col-sm-4">
              <span>Weight</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{weight}} kg</p>
            </div>
            <div v-if="length" class="col-sm-4" align="left">
              <span>Length</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{length}} cm</p>
            </div>
            <div v-if="width" class="col-sm-4">
              <span>Width</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{width}} cm</p>
            </div>
          </div>
          <div class="row">
            <div v-if="height" class="col-sm-4" align="left">
              <span>Height</span>  <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{height}} cm</p>
            </div>
            <div v-if="deliveryPrice" class="col-sm-4">
              <span>Delivery Price</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>
              <p>{{deliveryPrice}} USD</p>
            </div>
          </div>
          <div v-if="this.itemPhoto" class="row">
            <div class="col">
              <span>Photo</span> <i class="fa fa-info-circle" data-toggle="tooltip" title="Какая-то очень важная информация об этой функции"></i>

              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        :data-mdb-target=sharp+accordion+trackNumber
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      style="color: #000000; font-weight: 500; font-size: 14px;">
                      Посмотреть все фотографии
                    </button>
                  <div
                      :id=accordion+trackNumber
                      class="accordion-collapse collapse"
                      :aria-labelledby=sharp+accordion+trackNumber
                      data-mdb-parent="#accordionExample"
                  >
                    <div v-if="encodePhotos0 || encodePhotos1 || encodePhotos2 || encodePhotos3" class="accordion-body">
                      <div class="row row-cols-1 row-cols-lg-4 g-4" align="center">
                        <div class="col">
                          <div class="card photo-card h-100 justify-content-center">
                            <img data-mdb-toggle="modal"
                                 :data-mdb-target=sharp+modal0+trackNumber
                                 :src=encodePhotos0
                                 class="card-img-top"/>
                            <!-- Modal -->
                            <div class="modal fade" :id=modal0+trackNumber tabindex="-1" aria-labelledby="exampleModalLabel0" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel0">Modal title</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="container" align="center">
                                      <img :src=encodePhotos0 style="width: 100%" alt="">
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card photo-card h-100 justify-content-center">
                            <img data-mdb-toggle="modal"
                                 :data-mdb-target=sharp+modal1+trackNumber
                                 :src=encodePhotos1
                                 class="card-img-top"/>
                            <!-- Modal -->
                            <div class="modal fade" :id=modal1+trackNumber tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="container" align="center">
                                      <img :src=encodePhotos1 style="width: 100%" alt="">
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card photo-card h-100 justify-content-center">
                            <img data-mdb-toggle="modal"
                                 :data-mdb-target=sharp+modal2+trackNumber
                                 :src=encodePhotos2
                                 class="card-img-top" />
                            <!-- Modal -->
                            <div class="modal fade" :id=modal2+trackNumber tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="container" align="center">
                                      <img :src=encodePhotos2 style="width: 100%" alt="">
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card photo-card h-100 justify-content-center">
                            <img data-mdb-toggle="modal"
                                 :data-mdb-target=sharp+modal3+trackNumber
                                 :src=encodePhotos3
                                 class="card-img-top" />
                            <!-- Modal -->
                            <div class="modal fade" :id=modal3+trackNumber tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="container" align="center">
                                      <img :src=encodePhotos3 style="width: 100%" alt="">
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                   <div v-else style="padding: 0px 20px">
                      <p style="padding: 10px 0px;color: #000000; font-weight: 500; font-size: 16px;">Фото пока не сделаны :(</p>
                   </div>
                    
                  </div>
                </div>
              </div>


            </div>

          </div>
          <div class="row">
            <div v-if="id && (status == 'Создано')" class="col " style="margin:7px 10px" align="right">
              <a class="btn btn-danger" @click="deleteTrekk(id)">Удалить</a>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
const deleteURL = 'https://delivery-spring.herokuapp.com/rest/package/deletePackageRequest'
const getPhotoURL = 'https://delivery-spring.herokuapp.com/rest/upload/getPackagePhotos'
import router from "@/router";

export default {
name: "InfoCard",
  props:{
  itemType: String,
  Location: String,
  trackNumber: String,
  amount: Number,
  link: String,
  price: Number,
  currency: String,
  status: String,

  weight: Number,
  length: Number,
  width: Number,
  height: Number,
  deliveryPrice: Number,

  id: Number,

  itemCheck: Boolean,
  itemInsurance: Boolean,
  itemPhoto: Boolean,
  itemRepack: Boolean,
  itemSplit: Boolean,

  },
  data(){
    return{
      sharp: "#",
      accordion: "accordion",
      modal0: 'Modal0',
      modal1: 'Modal1',
      modal2: 'Modal2',
      modal3: 'Modal3',

      photos:{},
      encodePhotos0: '',
      encodePhotos1: '',
      encodePhotos2: '',
      encodePhotos3: '',
    }
  },
  methods:{
    deleteTrekk(currentId){
      axios
          .delete(deleteURL+'?id='+currentId, {
            headers: {
              'Authorization': localStorage.token
            }})
          .then(response => {
            console.log(response)
            router.go()
          })
          .catch(error => console.log("Ошибка! "+error))
    },
    getUserPhoto(){
      if(this.itemPhoto){
        axios
            .get(getPhotoURL+'?packageRequestId='+this.id, {
              headers: {
                'Authorization': localStorage.token
              }})
            .then(response => {
              this.photos = response.data
              this.encodePhotos0 = window.atob(this.photos[0].picByte)
              this.encodePhotos1 = window.atob(this.photos[1].picByte)
              this.encodePhotos2 = window.atob(this.photos[2].picByte)
              this.encodePhotos3 = window.atob(this.photos[3].picByte)
            })
            .catch(error => console.log("Ошибка! "+error))
      }
    },
  },
  created() {
  this.getUserPhoto()
  },
  watch:{
    trackNumber(){
      this.encodePhotos0 = ''
      this.encodePhotos1 = ''
      this.encodePhotos2 = ''
      this.encodePhotos3 = ''
      this.getUserPhoto()
    }
}
</script>

<style scoped>
.photo-card{
  max-width: 400px;
  border-radius: 8px;
}
.row{
  margin: 0px !important;
}
.fa-info-circle{
  color: #9B9B9B;
}
.items-options{
  background: #FFE676;
  border-radius: 50rem;
  padding: 8px;
  line-height: 22.5px;
  color: black;
  font-size: 18px;
}
/*Классы для отслеживания*/
.expected{
  color: #110CF9;
}
.received{
  color: #FD0404;
}
.closed{
  color: #046204;
}
.waitMoney{
  color: #ffda49;
}
.wait{
  color: #35022e;
}
.sent{
  color: #034145;
}
/*Конец классы для отслеживания*/

h5{
  color: black;
  font-weight: bold;
  font-size: 24px;
}
span{
  color: #9B9B9B;
  font-weight: bold;
  font-size: 12px;
}
p{
  color: #000000;
  font-weight: bold;
  font-size: 16px;
}
</style>
