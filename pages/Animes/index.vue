<template>
  <div>
    <div v-for="anime in animesList" :key="anime.id">
      <ul>
        <li><nuxt-link :to="`/animes/${anime.id}`">{{ anime.name }}</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async fetch ({ store, params }) {
    await store.dispatch('animes/fetchAnimes')
  },
  data() {
    return {
    }
  },
  computed: {
    animes () {
      return this.$store.state.animes.animes
    },
    animesList () {
      return this.animes.animes.data
    },
    pagesList () {
      return this.animes.animes.links
    }
  },
}
</script>

<style scoped>

</style>
