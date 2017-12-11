const diff = require('fast-diff')
const chalk = require('chalk')

module.exports = function prettyDiff(original, comparison) {
  const differences = diff(original, comparison)
  const formattedDiff = differences
    .map((chunk, index) => {
      if (chunk[0] === -1) {
        return chalk.red(showWhitespace(chunk[1]))
      }
      if (chunk[0] === 1) {
        return chalk.green(showWhitespace(chunk[1]))
      }
      const lines = chunk[1].split('\n')
      if (lines.length === 1) {
        return chunk[1]
      }
      if (lines.length === 2) {
        if (/^\s*$/.test(lines[0]) || /^\s*$/.test(lines[1])) {
          return chunk[1]
        }
      }
      if (index > 0 && index < differences.length - 1) {
        return (
          lines[0] + '\n' + chalk.grey('...') + '\n' + lines[lines.length - 1]
        )
      }
      if (index === 0) {
        return lines[lines.length - 1]
      }
      if (index === differences[differences.length - 1]) {
        return lines[0]
      }
    })
    .join('')
  return formattedDiff
}

function showWhitespace(text) {
  return text
    .replace(/\n/g, '\\n\n')
    .replace(/ /g, '·')
    .replace(/\t/g, '—')
}
