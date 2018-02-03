<template>
  <div id="app">
    <router-view class="animated fadeIn"/>
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
  @import "assets/css/style.css";

</style>
