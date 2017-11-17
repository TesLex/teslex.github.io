<template>
  <div>
    <b-jumbotron fluid header-leve="2">
      <template slot="header">
        TesLex Tech.
      </template>
      <template slot="lead">
        <b-container>
          Your way to new life.
        </b-container>
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .btn {
    -webkit-border-radius: 25cm;
    -moz-border-radius: 25cm;
    border-radius: 25cm;
  }
</style>
