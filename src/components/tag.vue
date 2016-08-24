<template lang="jade">
  div.tag.flex-column.container
    h2.title Tag: {{ tag }}
    article-preview(v-bind:article-index="tagIndex")
</template>

<script>
  import index from '../articles-index.json'
  import articlePreview from './common/article-preview'

  export default {
    route: {
      canReuse () {
        return false
      }
    },
    components: { articlePreview },
    data () {
      return {
        tagIndex: [],
        tag: this.$route.params.tag_name
      }
    },
    ready () {
      for (let item in index) {
        if (index[item].tags.indexOf(this.tag) !== -1) this.tagIndex.push(index[item])
      }
      this.tagIndex.sort(function (x, y) {
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
