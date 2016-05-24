<template lang="jade">
  div#markdown {{{ post }}}
</template>

<script>
  import po from './articles/1.md'
  import hljs from 'highlight.js'
  import jq from 'jquery'

  export default {
    data () {
      return {
        post: po
      }
    },
    ready () {
      // 代码高亮
      jq('code').each(function () {
        hljs.highlightBlock(this)
      })
      // 文章中的链接处理
      let router = this.$router
      jq('#markdown a').each(function () {
        jq(this).click(function () {
          let url = jq(this).attr('href')
          if (url.startsWith('http')) {
            return
          } else if (url.startsWith('#')) {
            jq(this).attr('href', 'javascript:void(0);')
            jq('html,body').animate({ scrollTop: jq(url).offset().top }, 500)
          } else {
            jq(this).attr('href', 'javascript:void(0);')
            router.go(url)
          }
        })
      })
    }
  }

</script>
<style lang="scss">
@import '../stylesheets/darkula.css';
</style>
