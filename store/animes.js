export const state = () => ({
  animes: {},
  currentAnime: {}
})

export const mutations = {
  SET_ANIMES (state, payload) {
    state.animes = payload
  },
  SET_CURRENT_ANIME (state, payload)  {
    state.currentAnime = payload
  }
}

export const actions = {
  async fetchAnimes ({ commit }) {
    const { data } = await this.$axios.get('/api/v1/animes')
    commit('SET_ANIMES', data)
  },
  async fetchAnimeDetail ({ commit }, animeId) {
    const { data } = await this.$axios.get(`/api/v1/animes/${animeId}`)
    commit('SET_CURRENT_ANIME', data)
  },

}
