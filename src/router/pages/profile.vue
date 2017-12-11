<script>
import { authGetters } from '@state/helpers'
import MainLayout from '@layouts/main'

export default {
  page: {
    title: 'My Profile',
  },
  components: {
    MainLayout,
  },
  computed: {
    ...authGetters,
  },
}
</script>

<template>
  <MainLayout>
    <h1>
      <AppIcon name="user"/>
      {{ currentUser.name }}
      Profile
    </h1>
    <pre>{{ currentUser }}</pre>
  </MainLayout>
</template>
