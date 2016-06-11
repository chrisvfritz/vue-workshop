<template>
  <layout>

    <adjacent-exercise-links
      :current-exercise="exercise"
      tooltip-direction="bottom"
    ></adjacent-exercise-links>

    <section>
      <h1>{{{ exercise.title }}}</h1>
    </section>

    <section :is="instructions"></section>

    <section>
      <h2>Examples</h2>
      <div v-for="example in exercise.examples">
        <h3>{{{ example.title }}}</h3>

        <div v-if="example.newPrereqJavaScript.length !== 0">
          <h4 :data-anchor-prefix="example.title">
            Before you start
          </h4>
          <p>This example assumes familiarity with the following JavaScript features:</p>
          <ul>
            <li v-for="concept in example.newPrereqJavaScript">
              <a :href="concept.url" target="_blank">
                {{{ concept.title }}}
              </a>
            </li>
          </ul>
        </div>

        <h4 :data-anchor-prefix="example.title">
          The code
        </h4>
        <pre><a :href="example.url" target="_blank"><code>{{ example.code }}</code></a></pre>

        <h4 :data-anchor-prefix="example.title">
          It's working when...
        </h4>
        <p>...{{ example.itsWorkingWhen }}.</p>

        <div v-if="example.newConcepts.length !== 0">
          <h4 :data-anchor-prefix="example.title">
            New concepts &amp; recommended reading
          </h4>
          <ul>
            <li v-for="concept in example.newConcepts">
              <a :href="concept.url" target="_blank">
                {{{ concept.title }}}
              </a>
            </li>
          </ul>
        </div>

        <hr>
      </div>

      <h3 :data-anchor-prefix="exercise.title">
        Modification challenge
      </h3>
      {{{ exercise.modification }}}
      <strong>
        When you're done building your app, show it to someone else in the workshop, so they can test it out and make sure it works.
      </strong>

      <hr>

      <h3 :data-anchor-prefix="exercise.title">
        Build-from-scratch challenge
      </h3>
      {{{ exercise.buildFromScratch }}}
      <strong>
        When you're done building your app, show it to someone else in the workshop, so they can test it out and make sure it works.
      </strong>
    </section>

    <adjacent-exercise-links
      :current-exercise="exercise"
      tooltip-direction="top"
    ></adjacent-exercise-links>
  </layout>
</template>

<script>
  import exercises from 'src/config/exercises'

  import Layout from 'src/layouts/main'
  import InstructionsSimple from 'src/components/instructions-simple'
  import AdjacentExerciseLinks from 'src/components/adjacent-exercise-links'

  export default {
    replace: false,

    components: {
      Layout, InstructionsSimple, AdjacentExerciseLinks
    },

    data () {
      return {
        exercise: exercises.filter(exercise => {
          return exercise.slug === this.$route.params.exercise
        })[0]
      }
    },

    computed: {
      instructions () {
        return 'instructions-' + this.exercise.setup
      }
    }
  }
</script>
