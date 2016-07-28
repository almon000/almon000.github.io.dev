<template lang="jade">
  div#header
    p.title {{ head.title }}
    div.info.flex-center-align
      p.date {{ head.date }}
      a.mark.flex-center(v-for="tag in head.tags", v-link="{ path: '/tag/' + tag }" ) {{ tag }}
  div#markdown {{{ post }}}
  div#duoshuo
</template>

<script>
  import hljs from 'highlight.js'
  import jq from 'jquery'

  export default {
    route: {
      canReuse () {
        return false
      }
    },
    data () {
      return {
        post: require('../components/articles/' + this.$route.params.post_id + '.md'),
        head: {}
      }
    },
    methods: {
      initDuoshuo () {
        let ds = document.createElement('div')
        ds.setAttribute('data-thread-key', this.$route.params.post_id)
        ds.setAttribute('data-url', window.location.href)
        ds.setAttribute('data-author-key', 'almon000')
        if (typeof (window.DUOSHUO) === 'undefined') {
          var timer = setInterval(function () {
            if (typeof (window.DUOSHUO) !== 'undefined') {
              window.DUOSHUO.EmbedThread(ds)
              jq('#duoshuo').append(ds)
              clearInterval(timer)
            }
          }, 1000)
        } else {
          window.DUOSHUO.EmbedThread(ds)
          jq('#duoshuo').append(ds)
        }
      }
    },
    ready () {
      // 读取文章头信息
      this.head = JSON.parse(this.post.slice(this.post.indexOf('{'), this.post.indexOf('}') + 1))
      // 加载多说评论
      this.initDuoshuo()
      // 代码高亮
      jq('pre > code').each(function () {
        hljs.highlightBlock(this)
      })
      let el = this
      // 文章中的链接处理
      jq('#markdown a').each(function () {
        this.addEventListener('click', function () {
          let url = jq(this).attr('href')
          if (url.startsWith('/')) {
            let jqel = jq(this)
            jqel.attr('href', 'javascript:void(0);')
            el.$router.go(url)
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

  #header {
    border-bottom: 1px solid #efeaea;
    .title{
      margin-bottom: 0;
      font-size: 36px;
    }
    .info {
      p, a {
        font-size: 14px;
        margin-right: 10px;
        height: 20px;
      }
      .date {
        margin-top: 20px;
      }
      .mark {
        color: black;
        height: 18px;
        padding: 0 4px;
        border: 1px solid #c3c3c3;
        border-radius: 4px;
      }
    }
  }
</style>
