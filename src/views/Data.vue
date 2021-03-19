<template>
  <div>
    <NavBar title="Посылки" name-page="Ввод данных"></NavBar>
    <div class="row">
       <div class="col-lg-8 offset-lg-3" style="margin-top: 16px; padding-left: 32px" align="left">
         <h3>Инфо</h3>
       </div>
     </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-3">
        <div class="card" align="left" style="margin-top: 24px; margin-bottom: 24px">
          <div class="card-title">
            <h4>Закажи товар на одном из Китайских сайтов на адрес Sunny Express.</h4>
          </div>
          <p>Как заказывать товары из Китая с нашей помощью. Всего 4 пункта и вы сможете забрать свою посылку из нашего офиса в Кишинёве.
            Заполни данные и получи доступ к возможностям Sunny Express. Красивая карточка. Заполни данные и получи доступ
            к возможностям Sunny Express. Красивая карточка. </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 16px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h3>Форма для поссылки</h3>
      </div>
    </div>

     <div class="row">
      <div class="col-lg-8 offset-lg-3">
        <div class="card main-card" style="padding-right: 24px;margin-bottom: 24px">

          <div class="col-lg mt-3">
            <form align="left" style="margin-left: 24px" @submit.prevent="CreateTrack">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md main-input">
                  <div class="form-outline" >
                    <div class="row ">
                      <p class="col fake-label">Item type</p>
                    </div>
                    <select type="text" class="form-control" v-model="itemType" required>
                      <option value="1">Clothing Items</option>
                      <option value="3">Spare Parts</option>
                      <option value="0">Consumer Electronics</option>
                      <option value="2">Sport Gear</option>
                      <option value="4">Other</option>
                    </select>
                  </div>
                </div>
                <div class="col-md main-input">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Amount</p>
                    </div>
                    <input type="number" v-model="amount" placeholder="Какой-то другой текст" class="form-control" min="0" required/>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md main-input">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Price</p>
                    </div>
                    <input type="number" v-model="price" placeholder="Какой-то другой текст" class="form-control" min="0" required/>
                  </div>
                </div>
                <div class="col-md main-input">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Currency</p>
                    </div>
                    <select type="text" class="form-control" v-model="currency" required>
                      <option value="0">USD</option>
                      <option value="1">EUR</option>
                      <option value="2">MDL</option>
                      <option value="3">CNY</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md main-input">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Options</p>
                    </div>
                    <multiselect v-model="value" tag-placeholder="Add this as new tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true"></multiselect>
                  </div>
                </div>
                <div class="col-md main-input">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Track number</p>
                    </div>
                    <input type="number" v-model="trackNumber" placeholder="Какой-то другой текст" class="form-control" min="0" required/>
                  </div>
                </div>
              </div>

              <div class="row">

                <div class="col-md">
                  <div class="form-outline">
                    <div class="row ">
                      <p class="col fake-label">Link/Item notes</p>
                    </div>
                    <input type="text" v-model="itemNotes" placeholder="Какой-то другой текст" class="form-control" required/>
                  </div>
                </div>

                <div class="col-md"></div>

              </div>
              <!-- Submit button -->
              <div class="row">
                <div class="col-md">
                  <button type="submit" class="btn btn-yellow btn-block mb-4">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 24px; padding-left: 32px; margin-bottom: 24px" align="left">
        <h3>Форма для поссылки</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 offset-lg-3" style="margin-top: 24px; margin-bottom: 24px">
        <div class="card">
          <div class="row" style="margin-top: 18px;margin-bottom: 9px;">
            <div class="col-sm-2 d-flex align-items-center justify-content-center">
              <i class="fa fa-exclamation-triangle" style="font-size: 60px; color: black"></i>
            </div>
            <div class="col text" align="left">
              <p>{{ alertMessage }}</p>
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

const createDataURL = 'https://delivery-spring.herokuapp.com/rest/package/addPackageRequest'
import MenuBar from '@/components/MenuBar'
import NavBar from '@/components/NavBar'
import axios from "axios";
import Multiselect from "vue-multiselect";
export default {
  name: "Data",
  components: {
    Multiselect,
    MenuBar, NavBar
  },
  data(){
    return{

      language: '',
      alertMessage: '',


      value: [],
      options: [
        { name: 'Photo', code: '1'},
        { name: 'Repack', code: '2'},
        { name: 'Check', code: '3'},
        { name: 'Split', code: '4'},
        { name: 'Insurance', code: '5'},
      ],

      itemType: '',
      amount: '',
      price: '',
      currency: '',
      itemNotes: '',
      trackNumber: '',
      itemPhoto: false,
      itemRepack: false ,
      itemSplit: false ,
      itemCheck: false ,
      itemInsurance: false ,
    }
  },
  created() {
    this.language = localStorage.language
  },
  watch: {
    language() {
      switch (this.language) {
        case '0':
          this.alertMessage = 'I am a text that is intended to warn of danger. Enter correct data,\n' +
              '                 otherwise, you risk losing the reference. The operator will be sure to double-check the entered\n' +
              '                 your data upon receipt of the parcel, but we are not responsible for the\n' +
              '                 errors. We will try to insure you against possible problems, but legal. responsibility\n' +
              '                 for this we do not accept.'
          break
        case '1':
          this.alertMessage = 'Sunt un text menit să avertizeze asupra pericolului. Introduceți datele corecte,\n' +
              '                 în caz contrar, riști să pierzi referința. Operatorul va fi sigur că va verifica din nou datele introduse\n' +
              '                 datele dvs. la primirea coletului, dar nu suntem responsabili pentru\n' +
              '                 erori. Vom încerca să vă asigurăm împotriva posibilelor probleme, dar legale. responsabilitate\n' +
              '                 pentru aceasta nu acceptăm.'
          break
        case '2':
          this.alertMessage = 'Я текст, что призван предупреждать об опасности. Введите корректные данные,\n' +
              '                иначе вы рискуете потерять поссылку. Оператор обязательно перепроверит введенные\n' +
              '                вами данные при получении посылки, но мы не несем ответственность за допущенные вами\n' +
              '                ошибки. Мы постраемся подстраховать вас от возможных проблем, но юр. ответственности\n' +
              '                за это не несем.'
          break
        case '3':
          this.alertMessage = '我的文字旨在警告危险。 输入正确的数据，\n' +
              '                 否则，您可能会丢失参考。 操作员将确保仔细检查输入的内容\n' +
              '                 您在收到包裹后的数据，但我们不对\n' +
              '                 错误。 我们将尽力确保您免受可能的问题困扰，但合法。 责任\n' +
              '                 为此，我们不接受。'
          break
      }
    }
  },
  methods:{
    CreateTrack(){
      //получаю выделеные значения в мультиселекте
      for(let i=0; i<this.value.length; i++){
        if(this.value[i].code == '1'){
          this.itemPhoto = true
        }
        if(this.value[i].code == '2'){
          this.itemRepack = true
        }
        if(this.value[i].code == '3'){
          this.itemCheck = true
        }
        if(this.value[i].code == '4'){
          this.itemSplit = true
        }
        if(this.value[i].code == '5'){
          this.itemInsurance = true
        }
      }
      axios
          .post(createDataURL,
              {
            'itemType': this.itemType,
            'amount': this.amount,
            'price': this.price,
            'currency': this.currency,
            'trackCode': this.trackNumber,
            'itemNotes': this.itemNotes,
            'itemPhoto': this.itemPhoto,
            'itemRepack': this.itemRepack,
            'itemSplit': this.itemSplit,
            'itemCheck': this.itemCheck,
            'itemInsurance': this.itemInsurance
          },
              {
                headers: {
                  'Authorization': localStorage.token
                }}
                )
          .then(response => {
            alert('Success! ' + response)
            router.push({path: '/trekking'})
          })
          .catch(error => alert("Ошибка! "+error))



      this.itemType = ''
      this.amount = ''
      this.price = ''
      this.currency = ''
      this.options = ''
      this.itemNotes = ''
      this.trackNumber = ''
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
h4{
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.card{
  padding: 24px;
  margin: 0px 12px;
  border-radius: 8px;
}
h3{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
.main-card{
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.fake-label{
  padding: 0px !important;
  margin-bottom: 0px !important;
  font-size: 12px;
  font-weight: 600;
  color: #0B0B0B;
}
.btn{
  margin-top: 32px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color:#000000;
}
.btn-yellow{
  background: #FFDA49;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
}
.form-control{
  border: 1px solid black;
  color: black;

  font-weight: 600;
  font-size: 14px;
}
.text{
  margin-right: 16px;
}
.card{
  margin-left: 24px;
  margin-right: 10px;
}
.row{
  margin-right: 0px !important;
  margin-left: 0px !important;
}
.main-input{
  margin-bottom: 16px;
}
p{
  font-weight: 500;
  font-size: 12px;
  color: #000000;
}
</style>

<style>
  /*Fix bug with height*/
  .multiselect__placeholder {
    display: inline-block !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
  }

  .multiselect.invalid .multiselect__tags {
    border: 1px solid #f86c6b !important;

  }

  /*Выбор нового*/
  .multiselect__option--highlight {
    background: #FFDA49 !important;

  }

  /*Комеентарий справа*/
  .multiselect__option--highlight:after {
    background: #FFDA49 !important;
  }

  /*Блоки с выбором тэгов в строке*/
  .multiselect__tags {
    padding: 5px !important;
    min-height: 10px;
    font-weight: 600!important;
    font-size: 14px!important;
  }

  /*Подсказка*/
  .multiselect__placeholder{
    margin-left: 10px;
    margin-top: 2px;

  }

  /*Цвет текста тэгов в строке*/
  .multiselect__tag,
  .multiselect__tags{
    background: #FFFFFF !important;
    border: 1px solid black !important;
    color: black !important;
    margin-bottom: 0px !important;
    margin-right: 5px !important;

  }

  /*цвет крестика у тэга*/
  .multiselect__tag-icon:after {
    color: black !important;
  }

  /*задний фон крестика при наведении*/
  .multiselect__tag-icon:focus,
  .multiselect__tag-icon:hover {
    background: #FFFFFF !important;
  }

  /*цвет крестика при наведении*/
  .multiselect__tag-icon:focus:after,
  .multiselect__tag-icon:hover:after {
    color: red !important;
  }
</style>
