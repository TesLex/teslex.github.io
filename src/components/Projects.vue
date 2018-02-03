<template>
  <div class="content">
    <div class="title">
      <h2>Чай</h2>
    </div>

    <section id="projects">
      <div class="cards">
        <div class="card">
          <div class="title">Yavir</div>
          <p class="content">
            Simple SPA JavaScript Framework
          </p>
          <div class="footer">
            <a target="_blank" href="https://github.com/expexes/Yavir.js">GitHub</a>
          </div>
        </div>
        <div class="card">
          <div class="title">Solovey</div>
          <p class="content">
            PHP Framework
          </p>
          <div class="footer">
            <a target="_blank" href="https://github.com/expexes/Solovey">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Config from '../config'

  export default {
    name: 'Projects',
    data() {
      return {
        projects: []
      }
    },
    created() {
      this.getProjects();
    },
    methods: {
      getProjects() {
        this.$http.get(Config.API_URL + '/projects').then(response => {
          this.projects = response.body;
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
