<template lang="jade">
  div#markdown {{{ post }}}
</template>

<script>
  import hljs from 'highlight.js'
  import jq from 'jquery'

  export default {
    data () {
      return {
        post: require('../components/articles/' + this.$route.params.post_id + '.md')
      }
    },
    ready () {
      // 代码高亮
      jq('pre > code').each(function () {
        hljs.highlightBlock(this)
      })
      // 文章中的链接处理
      jq('#markdown a').each(function () {
        this.addEventListener('click', function () {
          let url = jq(this).attr('href')
          if (url.startsWith('http')) {
            return
          } else if (url.startsWith('#')) {
            let jqel = jq(this)
            jqel.attr('href', 'javascript:void(0);')
            jq('html,body').animate({ scrollTop: jq(url).offset().top }, 500, 'swing', function () {
              jqel.attr('href', url)
            })
          }
        })
      })
    }
  }

</script>
<style lang="scss">
  @import '../stylesheets/hljs_styles/darkula.css';
  @import '../stylesheets/md_styles/default';
</style>
