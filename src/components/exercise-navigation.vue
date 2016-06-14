<template>
  <ol>
    <li v-for="exercise in exercises">
      <a v-link="'/exercises/' + exercise.slug">
        {{ exercise.title }}
      </a>
    </li>
    <li class="coming-soon-muted">
      <em>More coming soon!</em>
    </li>
  </ol>
</template>

<script>
  import exercises from 'src/data/exercises'

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
