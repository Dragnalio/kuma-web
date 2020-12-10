export const state = () => ({
  animes: {}
})

export const mutations = {
  SET_ANIMES (state, payload) {
    state.animes = payload
  }
}

export const actions = {
  async fetchAnimes ({ commit }) {
    const { data } = await this.$axios.get('/api/v1/animes')
    commit('SET_ANIMES', data)
  }
}
