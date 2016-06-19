<template>
  <section>
    <anchored-heading :importance="2">
      How to build simple Vue apps
    </anchored-heading>
    <p>For the examples in this exercise, all you'll need is an <code>index.html</code> file with the base content below. As you can see, it's just a regular HTML file with Vue pulled in from a CDN, just like you would do with jQuery!</p>
    <code-block :code="htmlTemplate"></code-block>
    <p>There are also more complicated systems for building and using Vue components, most notably <a href="https://github.com/vuejs-templates/webpack" target="_blank">using npm and Webpack</a>, but we'll be starting with the simplest possible use of Vue, which will be applicable in most applications.</p>
  </section>
</template>

<script>
  import vueCDNSource from 'src/data/vue-cdn-source'

  import AnchoredHeading from './anchored-heading'
  import CodeBlock from './code-block'

  export default {
    components: {
      AnchoredHeading, CodeBlock
    },

    data () {
      return {
        htmlTemplate: `<!DOCTYPE html>
<html>
<head>
  <title>My Vue App</title>
  <script src="${vueCDNSource}"></script\>
</head>
<body>
  <!-- CODE FROM EXAMPlES GOES HERE! -->
</body>
</html>`
      }
    }
  }
</script>
