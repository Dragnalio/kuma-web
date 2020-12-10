<template>
  <div>
    {{ anime }}
  </div>
</template>

<script>
  export default {
    name: "AnimeDetail",
    async fetch ({ store, params }) {
      await store.dispatch('animes/fetchAnimeDetail', params.id)
    },
    validate ({ params }) {
      // Must be a string
      return /^\S+$/.test(params.id)
    },
    computed: {
      anime() {
        return this.$store.state.animes.currentAnime
      }
    }
  }
</script>

<style scoped>

</style>
