<template>
  <div>
    <img class="logo" src="../assets/img/logo.png">
    <h3 class="slogan">{{ slogan }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        slogan: 'New generation of.. all'
      }
    }
  }
</script>
