'use strict'

const fs = require('fs')
const chalk = require('chalk')

const formatWithPrettier = require('./format-with-prettier')
const prettyDiff = require('./pretty-diff')

module.exports = async function checkFormatting(file, options) {
  for (const section of file.sections) {
    if (!section.code.trim()) continue

    const formattedCode = await formatWithPrettier({ file, section })

    if (!formattedCode) continue

    const fileDisplay = `${file.path}${
      section.lang === file.extension ? '' : ' (' + section.lang + ')'
    }`

    const goodFormattingText = chalk.green(`✔ ${fileDisplay}`)

    if (section.code === formattedCode) {
      console.log(goodFormattingText)
    } else {
      if (options.fix) {
        fs.writeFileSync(
          file.path,
          file.content.replace(section.code, () => formattedCode)
        )
        console.log(goodFormattingText)
        continue
      }
      console.log(chalk.red(`✘ ERROR: Formatting issues in ${fileDisplay}`))
      console.log(prettyDiff(section.code, formattedCode))
    }
  }
}
