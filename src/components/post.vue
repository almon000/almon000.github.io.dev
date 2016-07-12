<template lang="jade">
  div.post.flex-column
    h1.title Posts
    a(v-for="postName in postIndex"
      v-link="{ path: '/post/' + postName }") {{ postName }}
</template>

<script>
  import index from '../article-index.js'

  export default {
    data () {
      return {
        postIndex: Object.keys(index.post)
      }
    },
    ready () {
      this.postIndex.sort(function (x, y) {
        return index.post[x].date < index.post[y].date
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
