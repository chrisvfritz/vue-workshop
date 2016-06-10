<template>
  <section class="adjacent-exercise-links">
    <a
      v-if="prevExercise"
      :href="'/exercises/' + prevExercise.slug"
      :title="prevExercise.title"
    >⇦</a>
    <a
      href="/"
      title="Table of contents"
    ><i class="fa fa-home"></i></a>
    <a
      v-if="nextExercise"
      :href="'/exercises/' + nextExercise.slug"
      :title="nextExercise.title"
    >⇨</a>
  </section>
</template>

<script>
  import exercises from 'src/config/exercises'

  export default {
    props: {
      currentExercise: {
        type: Object,
        required: true
      }
    },

    computed: {
      currentExerciseIndex () {
        return exercises.indexOf(this.currentExercise)
      },
      prevExercise () {
        return exercises[this.currentExerciseIndex - 1]
      },
      nextExercise () {
        return exercises[this.currentExerciseIndex + 1]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../design';

  $nav-item-padding-vertical: 10px;
  $nav-item-padding-horizontal: 20px;

  .adjacent-exercise-links {
    display: flex;
    justify-content: space-between;
    margin-top: -$nav-item-padding-vertical / 2;

    a {
      width: 100%;
      padding: $nav-item-padding-vertical $nav-item-padding-horizontal;
      font-size: 1.5em;

      &:nth-of-type(2) {
        text-align: center;
      }

      &:last-of-type {
        text-align: right;
        margin-right: -$nav-item-padding-horizontal;
      }

      &:first-of-type {
        text-align: left;
        margin-left: -$nav-item-padding-horizontal;
      }

      &:hover {
        background: transparentize($body-link-color, 0.9);
        text-decoration: none;
      }
    }
  }
</style>
