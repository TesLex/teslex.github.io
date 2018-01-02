<template>
  <div id="app">
    <router-view class="animated fadeIn"/>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style>
  @import "assets/css/animate.css";
  @import "assets/css/style.css";

</style>
