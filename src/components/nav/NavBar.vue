<template>
  <div>
    <b-navbar variant="faded" type="light" toggleable>
      <b-navbar-brand>
        <img src="../../assets/logo.png" width="30px">
      </b-navbar-brand>
      <b-navbar-toggle target="nav"></b-navbar-toggle>
      <b-collapse is-nav id="nav">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Studio</b-nav-item>
          <b-nav-item href="#">News</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    data() {

    }
  }
</script>

<style>
  /*@media screen and (min-width: 768px) {*/
    /*.navbar-brand-centered {*/
      /*position: absolute;*/
      /*left: 50%;*/
      /*display: block;*/
      /*width: 160px;*/
      /*text-align: center;*/
      /*background-color: #eee;*/
    /*}*/

    /*.navbar > .container .navbar-brand-centered,*/
    /*.navbar > .container-fluid .navbar-brand-centered {*/
      /*margin-left: -80px;*/
    /*}*/
  /*}*/
</style>
