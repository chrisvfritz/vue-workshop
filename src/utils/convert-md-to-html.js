// Take markdown file,
// convert contents to HTML
import MarkdownIt from 'markdown-it'
export default markdown => {
  var md = new MarkdownIt()
  return md.render(markdown)
}
