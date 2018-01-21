<template>
  <div class="projects">
    <div class="card" v-for="p in projects">
      <div class="title">{{ p.title }}</div>
      <p class="content">
        {{ p.description }}
      </p>
      <div class="footer">
        <a target="_blank" :href="p.github">GitHub</a>
      </div>
    </div>
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
