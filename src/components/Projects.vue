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
  import ProjectsData from '@/assets/data/projects'

  export default {
    name: 'Projects',
    data() {
      return {
        projects: ProjectsData
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
