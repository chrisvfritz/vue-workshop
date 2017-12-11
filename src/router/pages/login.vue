<script>
import MainLayout from '@layouts/main'
import { authActions } from '@state/helpers'
import { appInfo } from '@/package.json'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appInfo.title}` }],
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      username: '',
      password: '',
      authError: null,
    }
  },
  methods: {
    ...authActions,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        username: this.username,
        password: this.password,
      })
        .then(token => {
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          this.authError = error
        })
    },
  },
}
</script>

<template>
  <MainLayout>
    <form
      :class="$style.form"
      @submit.prevent="tryToLogIn"
    >
      <AppInput
        v-model="username"
        name="username"
      />
      <AppInput
        v-model="password"
        name="password"
        type="password"
      />
      <AppButton type="submit">
        Log in
      </AppButton>
      <p v-if="authError">
        There was an error logging in to your account.
      </p>
    </form>
  </MainLayout>
</template>

<style lang="scss" module>
@import '~@design';

.form {
  text-align: center;
}
</style>
