<template>
  <div>
    <ul>
      <template v-for="node in contents">
        <li>
          <a :href="'#' + node.id">{{ node.text }}</a>
          <template v-if="node.children.length">
            <ul>
              <template v-for="child in node.children">
                <li>
                  <a :href="'#' + child.id">{{ child.text }}</a>
                </li>
              </template>
            </ul>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
type NodeLink = {
  level: number
  id: string
  text: string
  children: NodeLink[]
}
type IState = {
  contents: NodeLink[]
}

export default {
  data() {
    return {
      contents: [],
    } as IState
  },
  mounted() {
    // ##=h2, ###=h3
    this.contents.length = 0
    const page = document.querySelector('div.theme-default-content')
    if (page) {
      this.contents = this.parseHeader(page, 2, 3)
    }
  },
  methods: {
    parseHeader(element: Element, ha: number, hb?: number): NodeLink[] {
      let headings: string[] = []
      hb = hb || ha
      for (let level = ha; level <= hb; level++) {
        headings.push('h' + level)
      }
      const contents: NodeLink[] = []
      for (const node of element.querySelectorAll(headings.join(','))) {
        let id = node.id,
          text = (node.textContent || '').trim()
        if (!id || !text) continue
        if (text.startsWith('#')) {
          text = text.substring(1).trim()
        }
        contents.push({
          level: parseInt(node.tagName.substring(1)),
          id: id,
          text: text,
          children: [],
        })
      }

      const results = this.split(contents)
      return results
    },
    split(nodes: NodeLink[]): NodeLink[] {
      const results: NodeLink[] = []
      if (nodes.length == 0) return nodes
      const level = nodes[0].level
      let tmpList: NodeLink[] = []

      const _split = this.split
      function pushTemp(node: NodeLink) {
        if (tmpList.length > 0) {
          node.children = _split(tmpList)
          tmpList.length = 0
        }
      }

      for (const node of nodes) {
        if (node.level > level) {
          tmpList.push(node)
        } else {
          pushTemp(results[results.length - 1])
          results.push(node)
        }
      }
      pushTemp(results[results.length - 1])

      return results
    },
  },
}
</script>

<style>
textarea {
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  resize: vertical;
}
</style>
