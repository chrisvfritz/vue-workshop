<template>
  <section>
    <header>
      <h1>Vue.js workshop</h1>
      <img src="./assets/logo.png">
    </header>
  </section>

  <section>
    <h2>How this works</h2>
    <ol>
      <li><strong>Browse examples</strong> and paste them into an <code>index.html</code> file to try them out in your browser</li>
      <li><strong>Read some (beautiful!) docs</strong> to complete and expand your understanding</li>
      <li><strong>Tweak an example</strong> to gain experience building on a Vue app</li>
      <li><strong>Build a new project</strong> from scratch using your new knowledge</li>
      <li>Repeat!</li>
    </ol>
  </section>

  <section>
    <h2>How to build simple Vue apps</h2>
    <p>For all the examples in workshop, all you'll need is an <code>index.html</code> file with the base content below. As you can see, it's just a regular HTML file with Vue pulled in from a CDN, just like you would do with jQuery!</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Vue App&lt;/title&gt;
  &lt;script src="https://cdn.jsdelivr.net/vue/latest/vue.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- CODE FROM EXAMPlES GOES HERE! --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <p>There are also more complicated systems for building and using Vue components, most notably using npm and Webpack, but we'll be starting with the simplest possible use of Vue, which will be applicable in most applications.</p>
  </section>

  <section v-for="exercise in exercises">
    <h2>{{{ exercise.title }}}</h2>
    <div v-for="example in exercise.examples">
      <h3>
        <a :href="example.url" target="_blank">
          {{{ example.title }}}
        </a>
      </h3>
      <pre><a :href="example.url"><code>{{ example.code }}</code></a></pre>
      <h4>It's working when...</h4>
      <p>...{{ example.itsWorkingWhen }}</p>
      <h4>New concepts &amp; recommended reading</h4>
      <ul>
        <li v-for="concept in example.newConcepts">
          <a :href="concept.url" target="_blank">
            {{{ concept.title }}}
          </a>
        </li>
      </ul>
      <hr>
    </div>
    <h3>Modification challenge</h3>
    {{{ exercise.modification }}}
    <strong>
      When you're done building your app, show it to someone else in the workshop, so they can test it out and make sure it works.
    </strong>
    <hr>
    <h3>Build-from-scratch challenge</h3>
    {{{ exercise.buildFromScratch }}}
    <strong>
      When you're done building your app, show it to someone else in the workshop, so they can test it out and make sure it works.
    </strong>
  </section>
</template>

<script>
/* global hljs */
import exercises from 'src/config/exercises'

export default {
  data () {
    return {
      exercises
    }
  },
  ready () {
    this.highlightCodeBlocks()
  },
  methods: {
    highlightCodeBlocks () {
      Array.from(
        document.querySelectorAll('pre code')
      ).forEach(codeBlock => {
        hljs.highlightBlock(codeBlock)
      })
    }
  }
}
</script>

<style lang="scss">
  // -------
  // CONTENT
  // -------

  $content-vertical-padding: 15px;
  $content-horizontal-padding: 30px;

  body {
    font-family: 'Merriweather';
    font-weight: 300;
    line-height: 1.7;
    color: #2c3e50;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato';
  }

  h1, h2 {
    margin-top: 0;
  }

  h4 {
    text-transform: uppercase;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    width: 30%;
    border: none;
    border-top: 5px solid #555;
    border-radius: 5px;
    margin: 40px auto;
  }

  section {
    max-width: 800px;
    padding: $content-vertical-padding $content-horizontal-padding;
    margin: 100px auto 0 auto;

    &:first-of-type {
      margin-top: 0;
    }
  }

  // ------
  // HEADER
  // ------

  header {
    text-align: center;

    img {
      width: 100px;
      height: 100px
    }
  }

  // -----------
  // CODE BLOCKS
  // -----------

  $code-block-padding: $content-horizontal-padding;
  $code-block-background-color: #fbfff3;

  pre {
    background-color: $code-block-background-color;
    overflow-y: hidden;
    position: relative;

    &:before, &:after {
      content: '';
      width: $code-block-padding;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &:before {
      left: 0;
      background-image: linear-gradient(to left, transparent, $code-block-background-color);
    }

    &:after {
      right: 0;
      background-image: linear-gradient(to right, transparent, $code-block-background-color);
    }
  }

  code {
    font-family: 'PT Mono';
  }

  pre a:hover {
    text-decoration: none;
  }

  .xml .javascript {
    opacity: 1;
  }

  .hljs {
    background: transparent;
    color: #6E819E;
    padding: $code-block-padding;
  }

  .hljs-comment {
    color: #888;
  }
</style>
