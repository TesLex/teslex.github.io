<template>
  <div class="portfolio">
    <div class="card" v-for="p in portfolio">
      <div class="title">{{ p.title }}</div>
      <p class="content">
        {{ p.description }}
      </p>
      <div class="footer">
        <a target="_blank" :href="p.website">Go</a>
      </div>
    </div>
  </div>
</template>

<script>
  import PortfolioData from '@/assets/data/portfolio'

  export default {
    name: 'Portfolio',
    data() {
      return {
        portfolio: PortfolioData
      }
    },
    created() {
      //
    }
  }
</script>

<style scoped>
  a {
    color: #333;
  }
</style>
