const cheerio = require('cheerio')
const flatten = require('lodash/flatten')

const vueTagTypes = [
  {
    name: 'template',
    langDefault: 'html',
  },
  {
    name: 'script',
    langDefault: 'js',
  },
  {
    name: 'style',
    langDefault: 'css',
  },
]

module.exports = function extractVueTags(fileContent) {
  const $ = cheerio.load(fileContent)

  return flatten(
    vueTagTypes.map(tagType => {
      return $(tagType.name)
        .map((index, element) => {
          const tag = $(element)
          return {
            name: tagType.name,
            code: tag.html().replace(/^\n/, ''),
            lang: tag.attr('lang') || tagType.langDefault,
          }
        })
        .get()
    })
  )
}
