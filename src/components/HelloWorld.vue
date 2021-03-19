<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Installed CLI Plugins</h3>

    <h3>Essential Links</h3>

    <h3>Ecosystem</h3>
<!--TODO хранить на локал сторадж сесеия
        кнопка купить, баланс
          инстуркции, магазины - мимо кабинета
            Имя фамилия айдишник, аватарка добавить-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
