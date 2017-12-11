'use strict'

const fs = require('fs')
const path = require('path')
const globSearch = require('glob')

const extractVueTags = require('./extract-vue-tags')

const ignoreGlobs = fs
  .readFileSync(path.join(process.cwd(), '.prettierignore'), 'utf8')
  .split('\n')
  .map(glob => glob.trim())
  .filter(glob => glob && glob[0] !== '#')

module.exports = async function globCollectFileReads(glob) {
  const filePaths = await new Promise((resolve, reject) => {
    globSearch(glob, { ignore: ignoreGlobs, dot: true }, function(
      error,
      filePaths
    ) {
      if (error) return reject(error)
      resolve(filePaths)
    })
  })

  return filePaths.map(filePath => () =>
    new Promise((resolve, reject) => {
      const file = {
        content: '',
        path: filePath,
        extension: filePath.match(/\.?([^./\\]+)$/)[1],
      }
      fs
        .createReadStream(file.path)
        .on('data', chunk => {
          file.content += chunk
        })
        .on('end', () => {
          if (file.extension === 'vue') {
            file.sections = extractVueTags(file.content)
          } else {
            file.sections = [
              {
                code: file.content,
                lang: file.extension,
              },
            ]
          }
          resolve(file)
        })
        .on('error', error => {
          reject(error)
        })
    })
  )
}
