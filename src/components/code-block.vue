<template>
  <div>
    <pre v-if="href"><a :href="href" target="_blank"><code class="hljs" v-html="highlightedCode"></code></a></pre>
    <pre v-else><code class="hljs" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script>
  import { highlight } from 'highlight.js'

  export default {
    props: {
      code: {
        type: String,
        required: true
      },
      href: {
        type: String,
        default: null
      },
      language: {
        type: String,
        default: 'html'
      }
    },

    computed: {
      highlightedCode () {
        return highlight(this.language, this.code).value
      }
    }
  }
</script>
