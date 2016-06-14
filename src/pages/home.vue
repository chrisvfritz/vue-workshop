<template>
  <layout>
    <section>
      <header>
        <anchored-heading :importance="1">
          Vue.js workshop
        </anchored-heading>
        <img src="../assets/logo.png">
      </header>
    </section>

     <section>
      <anchored-heading :importance="2">
        Who this is for
      </anchored-heading>
      <p>Anyone who'd like to learn more about Vue in a hands-on learning environment. All examples should be compatible with both 1.x and the upcoming 2.0 release.</p>
    </section>

    <section>
      <anchored-heading :importance="2">
        How it works
      </anchored-heading>
      <p>For each set of exercises in the workshop, you'll:</p>
      <ol>
        <li><strong>See complete code examples</strong> and try them out in your browser</li>
        <li><strong>Browse beautiful docs</strong> to expand your understanding</li>
        <li><strong>Improve an example</strong> to strengthen new connections</li>
        <li><strong>Build a new project</strong> from scratch using what you've learned</li>
      </ol>
    </section>

    <section>
      <anchored-heading :importance="2">
        Table of contents
      </anchored-heading>
      <nav>
        <exercise-navigation></exercise-navigation>
      </nav>
    </section>
  </layout>
</template>

<script>
  import Layout from 'src/layouts/main'
  import ExerciseNavigation from 'src/components/exercise-navigation'
  import AnchoredHeading from 'src/components/anchored-heading'

  export default {
    replace: false,

    components: {
      Layout, ExerciseNavigation, AnchoredHeading
    }
  }
</script>

<style lang="scss" scoped>
  section {
    max-width: 600px;

    &:first-of-type {
      margin-top: 0;
    }
  }
</style>
