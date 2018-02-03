<template>
  <div class="content">
    <div class="title">
      <h2>Пруфи</h2>
    </div>

    <section id="portfolio">
      <div class="cards">
        <div class="card">
          <div class="title">Ecolife</div>
          <p class="content">
            Інтернет-магазин масла від TOM
          </p>
          <div class="footer">
            <a target="_blank" href="http://ecolife.lviv.ua">ecolife.lviv.ua</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Config from "../config";

  export default {
    name: 'Portfolio',
    data() {
      return {
        portfolio: []
      }
    }, created() {
      this.getPortfolio();
    },
    methods: {
      getPortfolio() {
        this.$http.get(Config.API_URL + '/portfolio').then(response => {
          this.portfolio = response.body;
        });
      }
    }
  }
</script>

<style scoped>
  a {
    color: #333;
  }
</style>
