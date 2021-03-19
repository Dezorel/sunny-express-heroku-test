<template>
    <p>.</p>
</template>

<script>
const userInfoURL = 'https://delivery-spring.herokuapp.com/rest/user/userInfo'

import router from "@/router";
import axios from "axios";

export default {
  name: "Temp",
  created() {
    axios
        .get( userInfoURL, {
          headers: {
            'Authorization': localStorage.token
          }})
        .then(response => {
          this.userInfo = response.data
          this.remoteAddress = this.userInfo.remoteAddress
          this.role = this.userInfo.role
          this.fName = this.userInfo.fName
          this.lName = this.userInfo.lName

          switch (this.role){
            case 'USER':
              console.log('it is user')
              break
            case 'OPERATOR':
              console.log('it is operator')
              break
            case 'ADMIN':
              console.log('it is admin')
              break
          }

          localStorage.remoteAddress = this.remoteAddress
          localStorage.user = this.userInfo.role
          localStorage.fName = this.fName
          localStorage.lName = this.lName
          router.push({path: '/'})
        })

  }
}
</script>

<style scoped>

</style>