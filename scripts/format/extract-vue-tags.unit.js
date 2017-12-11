import extractVueTags from './extract-vue-tags'

describe('scripts/format/extract-vue-tags', () => {
  it('correctly parses a standard Vue file', () => {
    const [templateTag, scriptTag, styleTag] = extractVueTags(`
      <template>
      foo
      </template>
      <script>
      bar
      </script>
      <style>
      baz
      </style>
    `)

    expect(templateTag.name).toEqual('template')
    expect(templateTag.lang).toEqual('html')
    expect(templateTag.code).toContain('foo')

    expect(scriptTag.name).toEqual('script')
    expect(scriptTag.lang).toEqual('js')
    expect(scriptTag.code).toContain('bar')

    expect(styleTag.name).toEqual('style')
    expect(styleTag.lang).toEqual('css')
    expect(styleTag.code).toContain('baz')
  })

  it('does not parse templates within templates', () => {
    const tags = extractVueTags(`
      <template>
        foo
        <template>
          bar
        </template>
      </template>
    `)

    expect(tags.length).toEqual(1)
    expect(tags[0].code).toMatch(/foo\s+<template>\s+bar\s+<\/template>/)
  })

  it('correctly parses lang attributes', () => {
    const [templateTag, scriptTag, styleTag] = extractVueTags(`
      <template a="a" lang="jade" b="b">
      foo
      </template>
      <script a="a" lang="ts" b="b">
      bar
      </script>
      <style a="a" lang="scss" b="b">
      baz
      </style>
    `)

    expect(templateTag.lang).toEqual('jade')
    expect(scriptTag.lang).toEqual('ts')
    expect(styleTag.lang).toEqual('scss')
  })
})
