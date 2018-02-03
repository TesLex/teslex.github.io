<template>
  <div id="top">
    <div class="top">
      <div class="x">
        <img class="logo" src="static/img/favicon.png">
        <h3 class="slogan">{{slogan}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    props: [
      'slogan'
    ]
  }
</script>

<style scoped>

</style>
