<template>
  <div class="div">
    <button class="btn btn-sm" @click="isActive = !isActive"><i :class="isActive? 'fas fa-times' : 'fas fa-bars'" style="color: #000000; font-size: 20px"></i></button>
<!--    <button class="btn btn-sm btn-light" @click="isActive = !isActive"><i class="fas fa-bars"></i></button>-->
    <div id="nav">
    <div class="menu-navigation col-lg-2 col-md-3 col-sm-4 col-7" align="left" :class="isActive ? 'active' : 'hide' ">
      <div v-if="isActive">
        <p v-if="fName" class="title" style="margin-top: 24px">{{fName}} {{lName}}</p>
        <p v-else class="title" style="margin-top: 24px">Гость</p>
        <p class="element">
          Post ID: <span v-if="remoteAddress" class="unactive">{{ remoteAddress }}</span>
          <span v-else class="unactive">Вы зашли как гость!</span>
        </p>

        <p v-if="user.toLowerCase() != 'operator'" class="group" style="margin-top: 32px;">Информация</p>
        <!--Инструкция-->
        <router-link v-if="user.toLowerCase() != 'operator'" to="/instruction">
          <MenuItem name="Инструкция" imageName="book"></MenuItem>
        </router-link>

        <!--Магазины-->
        <router-link v-if="user.toLowerCase() != 'operator'" to="/shop">
          <MenuItem name="Магазины" imageName="shopping-cart"></MenuItem>
        </router-link>


        <p v-if="user.toLowerCase() != 'operator'" class="group">Посылки</p>
        <!--Ввод данных-->
        <router-link v-if="user.toLowerCase() != 'operator'" to="/data">
          <MenuItem name="Ввод данных" imageName="pen-square"></MenuItem>
        </router-link>
        <!--Трекинг посылок-->
        <router-link v-if="user.toLowerCase() != 'operator'" to="/trekking">
          <MenuItem name="Трекинг посылок" imageName="boxes"></MenuItem>
        </router-link>
        <!--История посылок-->
        <router-link v-if="user.toLowerCase() != 'operator'" to="/history">
          <MenuItem name="История посылок" imageName="book-open"></MenuItem>
        </router-link>



        <p class="group">Аккаунт</p>
        <!--Личный кабинет-->
        <router-link to="/">
          <MenuItem name="Личный кабинет" imageName="user-alt"></MenuItem>
        </router-link>
        <!--Отчёты-->
        <div v-if="user">
          <router-link v-if="user.toLowerCase() == 'admin' || user.toLowerCase() == 'operator'" to="/report">
            <MenuItem name="Отчёты" imageName="file-alt"></MenuItem>
          </router-link>
        </div>
        <!--Выход-->
        <a href="#" @click="deleteToken">
          <router-link to="/auth">
            <MenuItem v-if="remoteAddress" name="Выйти" imageName="walking" ></MenuItem>
            <MenuItem v-else name="Авторизироваться" imageName="walking" ></MenuItem>
          </router-link>
        </a>


      </div>
    </div>
    </div>
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
  name: "MenuBar",
  components: {
    MenuItem
  },
  data() {
    return {
      isActive: true,
      remoteAddress: null,
      user: localStorage.user,
      fName: localStorage.fName,
      lName: localStorage.lName,
    }
  },
  created(){
    this.remoteAddress = localStorage.remoteAddress
      if(window.innerWidth < 992){
        this.isActive = false
      }
      else this.isActive = true
  },
  methods:{
    deleteToken(){
        localStorage.removeItem('token')
        localStorage.removeItem('remoteAddress')
        localStorage.removeItem('user')
        localStorage.removeItem('lName')
        localStorage.removeItem('fName')
    }
  }
}
</script>

<style scoped>
/*From vue app*/
#nav a, .unactive {
  color: #9b9b9b;
}
#nav a.router-link-exact-active .select{
  color: #000000;
  --bs-gutter-x: 1.5rem;
  margin-right: calc(var(--bs-gutter-x)/-107) !important;
  background: #FFDA49;
}
/*my styles*/
button{
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 3;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
.menu-navigation{
  position: fixed;
  background-color: #ffffff;
  padding-left: 12px;
  top: 0px;
  padding-top: 32px;
  height: 5000px;
}
.title{
  font-weight: 800;
  font-size: 14px;
  color: #000000;
}
.element{
  font-weight: 700;
  font-size: 12px;
  color: #000000;
}
.group{
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  color: #000000;
}
/*Попытка сделать анимацию для меню*/
.hide{
  transition: 0.5s;
  opacity: 0;
  display: none;
}
.menu-navigation.hide{
  padding-top: 0px;
  padding-bottom: 0px;
}
.active{
  transition: 0.5s;
  opacity: 1;
}
</style>
