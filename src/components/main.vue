<template lang="jade">
  div.main.flex-column.container
    h2.title 最近更新
    article-preview(v-bind:article-index="recentIndex")
</template>

<script>
  import articlePreview from './common/article-preview'
  import index from '../articles-index.json'

  export default {
    components: { articlePreview },
    data () {
      return {
        recentIndex: []
      }
    },
    ready () {
      for (let item in index) {
        if (item > 5) break
        this.recentIndex.push(index[item])
        this.recentIndex.sort(function (x, y) {
          return new Date(x.mtime) > new Date(y.mtime)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';
  .main {
    .title {
      color: #555555;
      width: 100%;
      border-bottom: 1px solid #efeaea;
      padding-bottom: 10px;
    }
  }
</style>
