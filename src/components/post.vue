<template lang="jade">
  div.post.flex-column.container
    h2.normal-title 文章
    article-preview(v-bind:article-index='postArticle')
</template>

<script>
  import index from '../articles-index.json'
  import articlePreview from './common/article-preview'

  export default {
    components: { articlePreview },
    data () {
      return {
        postArticle: []
      }
    },
    ready () {
      // 读取属于post类目下的文章目录
      for (let item in index) {
        if (index[item].class === 'post') this.postArticle.push(index[item])
      }
      this.postArticle.sort(function (x, y) {
        return x.date < y.date
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';
  .post {
  }
</style>
