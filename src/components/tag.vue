<template lang="jade">
  div.tag.flex-column.container
    navbar
    h1.title Tag: {{ tag }}
    a(v-for="articleName in articleIndex"
      v-link="{ path: '/post/' + articleName }") {{ articleName }}
</template>

<script>
  import index from '../articles-index.json'
  import navbar from './common/navbar.vue'

  export default {
    components: { navbar },
    data () {
      return {
        articleIndex: [],
        tag: this.$route.params.tag_name
      }
    },
    ready () {
      for (let item in index) {
        if (index[item].tags.indexOf(this.tag) !== -1) this.articleIndex.push(item)
      }
      this.articleIndex.sort(function (x, y) {
        return index[x].date < index[y].date
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
