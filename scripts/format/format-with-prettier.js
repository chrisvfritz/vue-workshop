const path = require('path')
const prettier = require('prettier')
const prettierEslint = require('prettier-eslint')
const prettierStylelint = require('prettier-stylelint')

const detectPrettierLang = require('./detect-prettier-lang')

module.exports = async function formatWithPrettier({ file, section }) {
  const prettierLang = detectPrettierLang(section.lang)
  if (!prettierLang) return false

  const currentWorkingDir = process.cwd()

  const mockFilePath = path.join(
    currentWorkingDir,
    path.dirname(file.path),
    `_.${section.lang}`
  )

  const prettierOptions = await prettier.resolveConfig(mockFilePath)

  if (prettierLang.group === 'CSS') {
    return prettierStylelint.format({
      text: section.code,
      filePath: mockFilePath,
      fallbackPrettierOptions: prettierOptions,
    })
  }

  if (prettierLang.group === 'JavaScript') {
    return prettierEslint({
      text: section.code,
      filePath: mockFilePath,
      fallbackPrettierOptions: prettierOptions,
    })
  }

  return prettier.format(section.code, {
    ...prettierOptions,
    filepath: mockFilePath,
  })
}
