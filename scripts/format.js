#!/usr/bin/env node
'use strict'

const prettierLangs = require('prettier').getSupportInfo().languages
const PQueue = require('p-queue')
const flatten = require('lodash/flatten')

const collectFileReads = require('./format/collect-file-reads')
const checkFormatting = require('./format/check-formatting')

const fileQueue = new PQueue({ concurrency: 100 })

let formattingErrorsCount = 0

async function format() {
  const prettierExtensions = flatten(
    prettierLangs.map(
      lang =>
        lang.extensions
          ? lang.extensions.map(extension => extension.slice(1))
          : []
    )
  )

  const fileReads = await collectFileReads(
    `**/*.+(${prettierExtensions.join('|')}|vue)`
  )

  return Promise.all(
    fileReads.map(readFile =>
      fileQueue.add(readFile).then(async file => {
        formattingErrorsCount += await checkFormatting(file, {
          fix: process.argv.some(arg => arg === '--fix' || arg === '--write'),
        })
      })
    )
  )
}

format().then(() => {
  process.exit(formattingErrorsCount)
})
