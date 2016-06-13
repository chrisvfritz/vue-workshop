<template>
  <layout>

    <adjacent-exercise-links
      :current-exercise="exercise"
      tooltip-direction="bottom"
    ></adjacent-exercise-links>

    <section>
      <anchored-heading :importance="1">
        {{{ exercise.title }}}
      </anchored-heading>
    </section>

    <section :is="instructions"></section>

    <section>
      <anchored-heading :importance="2">
        Examples
      </anchored-heading>
      <div v-for="example in exercise.examples">
        <anchored-heading :importance="3">
          {{{ example.title }}}
        </anchored-heading>

        <div v-if="example.newPrereqJavaScript.length !== 0">
          <anchored-heading :importance="4" :prefix="example.title">
            Before you start
          </anchored-heading>
          <p>This example assumes familiarity with the following JavaScript features:</p>
          <ul>
            <li v-for="concept in example.newPrereqJavaScript">
              <a :href="concept.url" target="_blank">
                {{{ concept.title }}}
              </a>
            </li>
          </ul>
        </div>

        <anchored-heading :importance="4" :prefix="example.title">
          The code
        </anchored-heading>
        <code-block
          :code="example.code"
          :href="example.url"
        ></code-block>

        <anchored-heading :importance="4" :prefix="example.title">
          It's working when...
        </anchored-heading>
        <p>...{{ example.itsWorkingWhen }}.</p>

        <div v-if="example.newConcepts.length !== 0">
          <anchored-heading :importance="4" :prefix="example.title">
            New concepts &amp; recommended reading
          </anchored-heading>
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

      <anchored-heading :importance="3" :prefix="exercise.title">
        Modification challenge
      </anchored-heading>
      {{{ exercise.modification }}}
      <strong>
        When you're done building your app, show it to someone else in the workshop, so they can test it out and make sure it works.
      </strong>

      <hr>

      <anchored-heading :importance="3" :prefix="exercise.title">
        Build-from-scratch challenge
      </anchored-heading>
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
  import exercises from 'src/data/exercises'

  import Layout from 'src/layouts/main'
  import InstructionsSimple from 'src/components/instructions-simple'
  import AdjacentExerciseLinks from 'src/components/adjacent-exercise-links'
  import CodeBlock from 'src/components/code-block'
  import AnchoredHeading from 'src/components/anchored-heading'

  const findExerciseBySlug = slug => {
    return exercises.filter(exercise => {
      return exercise.slug === slug
    })[0]
  }

  export default {
    replace: false,

    components: {
      Layout, InstructionsSimple, AdjacentExerciseLinks, CodeBlock,
      AnchoredHeading
    },

    data () {
      return {
        exercise: findExerciseBySlug(this.$route.params.exercise)
      }
    },

    route: {
      data (transition) {
        transition.next({
          exercise: findExerciseBySlug(transition.to.params.exercise)
        })
      }
    },

    computed: {
      instructions () {
        return 'instructions-' + this.exercise.setup
      }
    }
  }
</script>
