<template lang="jade">
  div.tag.flex-column.container
    h2.normal-title Tag: {{ tag }}
    article-preview(v-bind:article-index="tagArticle")
</template>

<script>
  import index from '../articles-index.json'
  import articlePreview from './common/article-preview'

  export default {
    route: {
      data (transition) {
        transition.next({
          tag: this.$route.params.tag_name,
          tagArticle: this.getTagArticle(this.$route.params.tag_name)
        })
      }
    },
    components: { articlePreview },
    data () {
      return {
        tagArticle: [],
        tag: this.$route.params.tag_name
      }
    },
    methods: {
      // 获得当前tag的文章目录
      getTagArticle (tag) {
        let tagArticle = []
        for (let item in index) {
          if (index[item].tags.indexOf(tag) !== -1) tagArticle.push(index[item])
        }
        tagArticle.sort(function (x, y) {
          return x.date < y.date
        })
        return tagArticle
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';
  .tag{
  }
</style>
