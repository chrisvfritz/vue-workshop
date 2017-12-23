import convertMdToHtml from './convert-md-to-html'

describe('@utils/convert-md-to-html', () => {
  it('transforms # into <h1>', () => {
    const md = "# I'm an H1."
    const html = convertMdToHtml(md)
    expect(html).toEqual(`<h1>I'm an H1.</h1>\n`)
  })
})
