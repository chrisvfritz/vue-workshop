<script>
import MainLayout from '@layouts/main'
import { contentGetters } from '@state/helpers'

export default {
  components: {
    MainLayout,
  },
  computed: {
    ...contentGetters,
  },
}
</script>

<template>
  <MainLayout>
    <router-link :to="{ name: 'exercises' }">
      Back
    </router-link>
    <pre
      v-if="currentExercise"
      v-text="currentExercise"
    />
    <p v-else>
      No exercise exists: "{{ $route.params.slug }}"
    </p>
  </MainLayout>
</template>

