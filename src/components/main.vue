<template lang="jade">
  div.main.flex-column.container
    h2.normal-title 最近更新
    article-preview(v-bind:article-index="recentArticle")
</template>

<script>
  import articlePreview from './common/article-preview'
  import index from '../articles-index.json'

  export default {
    components: { articlePreview },
    data () {
      return {
        recentArticle: []
      }
    },
    ready () {
      // 读取最近更新的文章目录
      for (let item in index) {
        if (item > 5) break
        this.recentArticle.push(index[item])
        this.recentArticle.sort(function (x, y) {
          return new Date(x.mtime) > new Date(y.mtime)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';
  .main {
  }
</style>
