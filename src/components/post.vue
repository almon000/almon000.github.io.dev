<template lang="jade">
  div.post.flex-column
    navbar
    h1.title Posts
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
        articleIndex: []
      }
    },
    ready () {
      for (let item in index) {
        if (index[item].class === 'post') this.articleIndex.push(item)
      }
      this.articleIndex.sort(function (x, y) {
        return index[x].date < index[y].date
      })
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    margin: 50px 300px;
  }
</style>
