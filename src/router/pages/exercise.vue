<script>
import MainLayout from '@layouts/main'
import { contentGetters } from '@state/helpers'
import convertMdToHtml from '@utils/convert-md-to-html'

export default {
  components: {
    MainLayout,
  },
  computed: {
    ...contentGetters,
    lessonContent() {
      return convertMdToHtml(this.currentExercise.markdown)
    },
  },
}
</script>

<template>
  <MainLayout>
    <router-link :to="{ name: 'exercises' }">
      Back
    </router-link>
    <!-- <pre
      v-if="currentExercise"
      v-text="currentExercise"
    />
    <p v-else>
      No exercise exists: "{{ $route.params.slug }}"
    </p> -->
    <h1>{{ currentExercise.title }}</h1>
    <div v-html="lessonContent" />
  </MainLayout>
</template>

