<template>
  <div class="contact">
    Email: <a :href="'mailto:' + email">{{email}}</a>
  </div>
</template>

<script>
  export default {
    name: "contact",
    data: function () {
      return {
        email: 'devid.kohut@gmail.com'
      }
    }
  }
</script>

<style scoped>

</style>
