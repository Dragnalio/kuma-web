<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        {{ errorMessage }}
        <label>Email</label>
        <input v-model="login.email" type="email">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="password">
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    async userLogin () {
      try {
        this.errorMessage = ''
        await this.$auth.loginWith('local', { data: this.login })
      } catch (e) {
        if (e.response) {
          this.errorMessage = e.response.message
        } else {
          this.errorMessage = e.message
        }
      }
    }

  }
}
</script>

<style scoped>

</style>
