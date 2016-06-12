<template>
  <section
    :data-tooltip-direction="tooltipDirection"
    :data-num-links="prevExercise && nextExercise ? 3 : 2"
    class="adjacent-exercise-links"
  >
    <a
      v-if="prevExercise"
      :href="'/exercises/' + prevExercise.slug"
      :title="prevExercise.title"
    ><img src="../assets/left-24.png" alt="Left"></a>
    <a
      href="/"
      title="Table of contents"
    ><img src="../assets/house-24.png" alt="House"></a>
    <a
      v-if="nextExercise"
      :href="'/exercises/' + nextExercise.slug"
      :title="nextExercise.title"
    ><img src="../assets/right-24.png" alt="Right"></a>
  </section>
</template>

<script>
  import exercises from 'src/config/exercises'

  export default {
    props: {
      currentExercise: {
        type: Object,
        required: true
      },
      tooltipDirection: {
        type: String,
        default: 'bottom',
        validator (value) {
          return ['top', 'bottom'].some(acceptableValue => {
            return value === acceptableValue
          })
        }
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

  $nav-item-padding-vertical: 0.5em;
  $nav-item-padding-horizontal: 20px;
  $nav-item-hover-background: lighten($body-link-color, 50%);
  $nav-links-font-size: 1.5em;
  $huge-tooltip-width: 1000px;

  .adjacent-exercise-links {
    display: flex;
    justify-content: space-between;

    &:first-child {
      margin-top: -$nav-item-padding-vertical / 2;
    }

    a {
      width: 100%;
      padding: $nav-item-padding-vertical $nav-item-padding-horizontal;
      font-size: $nav-links-font-size;
      position: relative;

      img {
        width: 1em;
        vertical-align: middle;
      }

      &:before {
        display: none;
        content: attr(title);
        width: $huge-tooltip-width;
        pointer-events: none;
        position: absolute;
        font-size: 0.7em;
        padding: $nav-item-padding-vertical $nav-item-padding-horizontal;
        background-color: $nav-item-hover-background;
        z-index: 1;
      }

      &:nth-of-type(2) {
        text-align: center;

        &:before {
          left: -100%;
          text-align: center;
        }
      }

      &:last-of-type {
        text-align: right;
        margin-right: -$nav-item-padding-horizontal;

        &:before {
          right: 0;
          text-align: right;
        }
      }

      &:first-of-type {
        text-align: left;
        margin-left: -$nav-item-padding-horizontal;

        &:before {
          left: 0;
          text-align: left;
        }
      }

      &:hover {
        background-color: $nav-item-hover-background;
        text-decoration: none;

        &:before {
          display: block;
        }
      }
    }

    &[data-tooltip-direction="top"] a:before {
      bottom: 100%;
      box-shadow: 0 -10px 10px white;
    }

    &[data-tooltip-direction="bottom"] a:before {
      top: 100%;
      box-shadow: 0 10px 10px white;
    }

    &[data-num-links="3"] a:before {
      width: calc(100% * 3);
    }

    &[data-num-links="2"] a:before {
      width: calc(100% * 2);
    }
  }
</style>
