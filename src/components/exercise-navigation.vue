<template>
  <ul>
    <li v-for="exercise in exercises">
      <a v-link="'/exercises/' + exercise.slug">
        {{ exercise.title }}
      </a>
    </li>
    <li class="coming-soon-muted">
      {{ exercises.length + 1 }}. <em>More coming soon!</em>
    </li>
  </ul>
</template>

<script>
  import exercises from 'src/config/exercises'

  export default {
    data () {
      return {
        exercises,
        currentExercise: exercises.filter(exercise => {
          return exercise.slug === this.$route.params.exercise
        })[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../design';

  .coming-soon-muted {
    color: desaturate(lighten($body-font-color, 35%), 50%);
  }
</style>
