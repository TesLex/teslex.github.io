<template>
  <div>
    <b-container>
      <nav-bar></nav-bar>
    </b-container>

    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/nav/NavBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style>
</style>
