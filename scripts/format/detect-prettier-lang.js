'use strict'

const prettierLangs = require('prettier').getSupportInfo().languages

module.exports = function detectPrettierLang(codeLang) {
  return prettierLangs.find(
    lang =>
      (lang.extensions && lang.extensions.includes('.' + codeLang)) ||
      (lang.aliases && lang.aliases.includes(codeLang)) ||
      (lang.filenames && lang.filenames.includes(codeLang))
  )
}
