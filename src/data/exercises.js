const contextRequire = require.context('./exercises/', false, /\.yml$/)

export default contextRequire.keys().map((filename, exerciseIndex) => {
  const exerciseData = contextRequire(filename)

  return {
    ...exerciseData,
    id: exerciseIndex + 1,
    slug: filename.match(/^\.\/\d+\-([\w\-]+)\.yml$/)[1],
    examples: exerciseData.examples.map((exampleData, exampleIndex) => {
      let headAndBodyCode = ''
      if (exampleData.headCode) {
        headAndBodyCode += '<!-- Add the code below to your head, after the Vue core library -->\n' +
          exampleData.headCode.trim() +
          '\n<!-- End of head code -->\n\n'
      }
      headAndBodyCode += exampleData.bodyCode

      const encodedFullHTML = encodeURIComponent(
`<!DOCTYPE html>
<html>
<head>
  <title>My Vue App</title>
  <script src="https://cdn.jsdelivr.net/vue/1.0.24/vue.js"></script>${exampleData.headCode
    ? '\n  ' + exampleData.headCode.split('\n').join('\n  ').trim()
    : ''
  }
</head>
<body>
  ${exampleData.bodyCode.split('\n').join('\n  ').trim()}
</body>
</html>`
      )

      return {
        ...exampleData,
        id: exampleIndex + 1,
        title: exampleData.title,
        code: headAndBodyCode,
        url: 'http://jsbin.com/?html,output&html=' + encodedFullHTML,
        newConcepts: exampleData.newConcepts || [],
        newPrereqJavaScript: exampleData.newPrereqJavaScript || []
      }
    })
  }
})
