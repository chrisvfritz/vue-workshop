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
    <h1>Exercises</h1>
    <ol>
      <li
        v-for="exercise in exercises"
        :key="exercise.slug"
      >
        <pre>{{ exercise }}</pre>
        <router-link :to="{ name: 'exercise', params: { slug: exercise.slug } }">
          Link
        </router-link>
      </li>
    </ol>
  </MainLayout>
</template>
