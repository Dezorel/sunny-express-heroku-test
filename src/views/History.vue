<template>
  <div>
    <NavBar title="Посылки" name-page="История посылок"></NavBar>
    <div class="row">
      <div class="col-md-8 offset-md-3" style="margin-top: 16px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h3>Инфо</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-3">
        <PackageList title="Список полученных посылок" :count-of-package="tracks.length"></PackageList>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-3" style="margin-top: 24px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h3>Фильтры</h3>
      </div>
    </div>
    <!--Фильтры-->
    <div class="row">
      <div class="col-md-8 offset-md-3">
        <div class="card mb-3" style="margin-left:16px;margin-right:16px">
          <div class="row d-flex align-items-center" style="padding-bottom: 16px; padding-top: 16px">
            <div class="col-md-4">
              <div align="left"><label>По дате</label></div>
              <select v-model="sortTime" name="" class="form-control">
                <option value="new">Сначала новые</option>
                <option value="old">Сначала старые</option>
              </select>
            </div>
            <div class="col-md-4">
              <div align="left"><label>По типу посылки</label></div>
              <select class="form-control" v-model="itemTypeSort" name="">
                <option value="undefined">Показать все</option>
                <option value="clothing_items">Clothing Items</option>
                <option value="spare_parts">Spare Parts</option>
                <option value="consumer_electronics">Consumer Electronics</option>
                <option value="sport_gear">Sport Gear</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--Конец Фильтры-->
    <div v-if="tracks.length > 0" class="row">
      <div  class="col-md-8 offset-md-3" v-for="track in tracks" v-bind:key="track.key">
        <InfoCard v-if="(itemTypeSort == 'undefined')"  :item-type="track.itemType" :track-number="track.trackCode" :amount="track.amount"
                  :link="track.itemNotes ? track.itemNotes : 'Не указано'" :price="track.price" :currency="track.currency" :item-check="track.itemCheck"
                  :item-insurance="track.itemInsurance" :item-photo="track.itemPhoto" :item-repack="track.itemRepack"
                  :item-split="track.itemSplit"
                  :weight="track.weight" :length="track.length" :width="track.width" :height="track.height" :delivery-price="track.deliveryPrice"
                  :status="(track.createdDate != null) && (track.chinaWarehouseArrivedDate == null) ? 'Создано' :
                  (track.chinaWarehouseArrivedDate!= null) && (track.chinaWarehouseSentDate == null) ? 'Ожидает отправки' :
                  (track.chinaWarehouseSentDate!= null) && (track.localWarehouseArrivedDate == null) ? 'Отправлено' :
                  (track.localWarehouseArrivedDate!= null) && (track.packageRequestClose == null) ? 'Ожидает оплаты' :
                  (track.packageRequestClose!= null) ? 'Оплачено' : 'Ошибка!'">
        </InfoCard>
        <InfoCard v-if="(itemTypeSort != 'undefined')&&(track.itemType.toLowerCase() == itemTypeSort)" :item-type="track.itemType"
                  :track-number="track.trackCode" :amount="track.amount"
                  :link="track.itemNotes ? track.itemNotes : 'Не указано'" :price="track.price" :currency="track.currency" :item-check="track.itemCheck"
                  :item-insurance="track.itemInsurance" :item-photo="track.itemPhoto" :item-repack="track.itemRepack"
                  :item-split="track.itemSplit"
                  :weight="track.weight" :length="track.length" :width="track.width" :height="track.height" :delivery-price="track.deliveryPrice"
                  :status="(track.createdDate != null) && (track.chinaWarehouseArrivedDate == null) ? 'Создано' :
                  (track.chinaWarehouseArrivedDate!= null) && (track.chinaWarehouseSentDate == null) ? 'Ожидает отправки' :
                  (track.chinaWarehouseSentDate!= null) && (track.localWarehouseArrivedDate == null) ? 'Отправлено' :
                  (track.localWarehouseArrivedDate!= null) && (track.packageRequestClose == null) ? 'Ожидает оплаты' :
                  (track.packageRequestClose!= null) ? 'Оплачено' : 'Ошибка!'">
        </InfoCard>
        
        <!-- a class="btn btn-danger" @click="deleteTrekk(track.id)">Удалить</a>-->
      </div>

    </div>
    <div v-else style="margin:0px 55px">
      <div class="col-md-8 offset-md-3">
        <p style="padding: 24px; font-size: 16px; font-weight: bold; color: black;">Здесь пока что пусто! :(</p>
      </div>
    </div>
    <MenuBar></MenuBar>
  </div>
</template>

<script>
import axios from "axios";

const historyURL = 'https://delivery-spring.herokuapp.com/rest/package/getRequestHistory'
import MenuBar from '@/components/MenuBar'
import NavBar from '@/components/NavBar'
import PackageList from "@/components/PackageList";
import InfoCard from "@/components/InfoCard";

export default {
  name: "History",
  components: {
    MenuBar, NavBar, PackageList, InfoCard
  },
  data(){
    return{
      language: '',
      message: '',

      tracks: [],
      noHistory: 'Ваша история пуста',

      itemTypeSort: 'undefined',
      sortTime: 'new',
    }
  },
  created() {
    this.language = localStorage.language

    axios
        .get( historyURL, {
          headers: {
            'Authorization': localStorage.token
          }})
        .then(response => {
          this.tracks = response.data
        })
  },
  watch: {
    language() {
      switch (this.language) {
        case '0':
          this.message = 'This is history page'
          break
        case '1':
          this.message = 'Aceasta este pagina de istorie'
          break
        case '2':
          this.message = 'Это страница истории'
          break
        case '3':
          this.message = '这是历史页面'
          break
      }
    },
    sortTime(){
      this.tracks.reverse()
    }
  },
}
</script>

<style scoped>
label{
  font-weight: bold;
  font-size: 12px;
  color: #000000;
}
h3{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
.row{
  margin: 0px !important;
}
.form-control{
  font-size: 14px;
  border: 1px solid black;
  color: black;
}
</style>