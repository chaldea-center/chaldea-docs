/**
 * markdown-it plugin: render images with a title as a semantic figure.
 *
 * `![alt](src "caption")` -> <figure><img><figcaption>caption</figcaption></figure>
 * Images without a title are rendered unchanged.
 *
 * The title attribute is removed from <img> so it only declares the caption
 * (no hover tooltip). Chains on top of the previous image render rule, so
 * VitePress's own enhancements (e.g. lazy loading) are preserved.
 */
import type { MarkdownRenderer } from 'vitepress'

export function imgFigure(md: MarkdownRenderer): void {
  // A lone image still renders inside a <p> paragraph. Hide the <p> wrapper
  // for paragraphs consisting of a single image so the <figure> output stays
  // block-level (a <figure> inside <p> is invalid HTML and breaks hydration).
  md.core.ruler.after('inline', 'img_figure_unwrap', (state) => {
    const tokens = state.tokens
    for (let i = 1; i < tokens.length - 1; i++) {
      if (tokens[i].type !== 'inline') continue
      const open = tokens[i - 1]
      const close = tokens[i + 1]
      if (open.type !== 'paragraph_open' || close.type !== 'paragraph_close')
        continue
      const children = tokens[i].children ?? []
      const meaningful = children.filter(
        (t) => !(t.type === 'text' && t.content.trim() === '')
      )
      if (meaningful.length === 1 && meaningful[0].type === 'image') {
        tokens[i].children = meaningful
        open.hidden = true
        close.hidden = true
        meaningful[0].meta = { ...meaningful[0].meta, figure: true }
      }
    }
    return true
  })

  const defaultRender =
    md.renderer.rules.image ??
    ((tokens, idx, options, _env, self) =>
      self.renderToken(tokens, idx, options))

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const title = token.attrGet('title')
    if (!title || !token.meta?.figure)
      return defaultRender(tokens, idx, options, env, self)

    // Token has no attrDel; remove the title attribute directly
    if (token.attrs)
      token.attrs = token.attrs.filter((attr) => attr[0] !== 'title')
    const img = defaultRender(tokens, idx, options, env, self)
    return `<figure style="text-align:center">${img}<figcaption>${md.utils.escapeHtml(title)}</figcaption></figure>`
  }
}
