<template>
  <div>
    {{ animes }}
  </div>
</template>

<script>
export default {
  name: 'Index',
  async fetch ({ store, params }) {
    await store.dispatch('animes/fetchAnimes')
  },
  computed: {
    animes () {
      return this.$store.state.animes.animes
    }
  }
}
</script>

<style scoped>

</style>
