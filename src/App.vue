<template>
  <div id="app">
    <header>
      <h1>Vue.js workshop</h1>
      <img class="logo" src="./assets/logo.png">
    </header>
    <h2>How this works</h2>
    <ol>
      <li>Browse examples and paste them into an <code>index.html</code> file to try them out in your browser</li>
      <li>Read some (beautiful!) docs to complete and expand your understanding</li>
      <li>Tweak an example to gain experience building on a Vue app</li>
      <li>Build a new project from scratch using your new knowledge</li>
      <li>Repeat!</li>
    </ol>
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

    <div v-for="exercise in exercises">
      <h2>{{{ exercise.title }}}</h2>
      <div v-for="example in exercise.examples">
        <h3>
          <a :href="example.url" target="_blank">
            {{{ example.title }}}
          </a>
        </h3>
        <pre @click="open(example.url)" class="openable"><code>{{ example.code }}</code></pre>
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
    </div>

  </div>
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
    Array.from(
      document.querySelectorAll('pre > code')
    ).forEach(codeBlock => {
      hljs.highlightBlock(codeBlock)
    })
  },
  methods: {
    open (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style>

  body {
    font-weight: 300;
    font-family: 'Merriweather';
    color: #444;
    line-height: 1.7;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato';
    font-weight: 400;
    color: #444;
    line-height: 1.8;
  }

  h2 {
    margin-top: 75px;
  }

  pre {
    background-color: #fbfff3;
    color: #846069;
    padding: 30px;
    overflow-y: hidden;
  }

  code {
    font-family: 'PT Mono';
  }

  .hljs {
    background: transparent;
  }

  hr {
    border: none;
    border-top: 5px solid #555;
    border-radius: 4px;
    width: 200px;
    margin: 40px auto;
  }

  #app {
    max-width: 800px;
    padding: 15px 30px;
    background: rgba(255,255,255,0.05);
    margin: 0 auto;
    color: #2c3e50;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  #app a:hover {
    text-decoration: underline;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .xml .javascript {
    opacity: 1;
  }

  h4 {
    text-transform: uppercase;
  }

  header {
    text-align: center;
  }

  .openable {
    cursor: pointer;
  }
</style>
