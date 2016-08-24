<template lang="jade">
  div.post.flex-column.container
    h2.title 文章
    article-preview(v-bind:article-index='postIndex')
</template>

<script>
  import index from '../articles-index.json'
  import articlePreview from './common/article-preview'

  export default {
    components: { articlePreview },
    data () {
      return {
        postIndex: []
      }
    },
    ready () {
      for (let item in index) {
        if (index[item].class === 'post') this.postIndex.push(index[item])
      }
      this.postIndex.sort(function (x, y) {
        return x.date < y.date
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';

  .title {
    color: #555555;
    width: 100%;
    border-bottom: 1px solid #efeaea;
    padding-bottom: 10px;
  }
</style>
