<template>
  <layout>
    <section>
      <header>
        <h1>Vue.js workshop</h1>
        <img src="../assets/logo.png">
      </header>
    </section>

     <section>
      <h2>Who is this for?</h2>
      <p>Anyone who'd like to learn more about Vue in a hands-on learning environment. All examples are compatible with both 1.x and the upcoming 2.0 release.</p>
    </section>

    <section>
      <h2>How this works</h2>
      <p>For each set of exercises in this workshop, you'll:</p>
      <ol>
        <li><strong>See complete code examples</strong> and try them out in your browser</li>
        <li><strong>Browse beautiful docs</strong> to expand your understanding</li>
        <li><strong>Improve an example</strong> to strengthen new connections</li>
        <li><strong>Build a new project</strong> from scratch using what you've learned</li>
        <li>Repeat!</li>
      </ol>
    </section>

    <section>
      <h2>Table of contents</h2>
      <nav>
        <exercise-navigation></exercise-navigation>
      </nav>
    </section>
  </layout>
</template>

<script>
  import Layout from 'src/layouts/main'
  import ExerciseNavigation from 'src/components/exercise-navigation'

  export default {
    components: {
      Layout, ExerciseNavigation
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
