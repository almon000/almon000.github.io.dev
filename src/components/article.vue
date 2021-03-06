<template lang="jade">
  div.article.container
    div.head-img
    div.header
      p.title {{ head.title }}
      div.info.flex-center-align
        p.date {{ head.date }}
        a.tag.flex-center(v-for="tag in head.tags", v-link="{ path: '/tag/' + tag }" ) {{ tag }}
    div.markdown {{{ article }}}
    div.duoshuo
</template>

<script>
  import hljs from 'highlight.js'
  import jq from '$'
  import index from '../articles-index.json'
  import { openMask } from '../vuex/actions'

  export default {
    route: {
      canReuse () {
        return false
      }
    },
    data () {
      return {
        // 文章唯一标识，以md文件名为准, title必须等于文件名
        articleId: this.$route.params.article_id
      }
    },
    computed: {
      // 文章内容
      article () {
        return require('../components/articles/' + this.articleId + '.md')
      },
      head () {
        return index[this.articleId]
      }
    },
    vuex: {
      actions: {
        openMask
      }
    },
    methods: {
      // 多说评论框初始化
      initDuoshuo () {
        let ds = document.createElement('div')
        ds.setAttribute('data-thread-key', this.articleId)
        ds.setAttribute('data-url', window.location.href)
        ds.setAttribute('data-author-key', 'almon000')
        if (typeof (window.DUOSHUO) === 'undefined') {
          var timer = setInterval(function () {
            if (typeof (window.DUOSHUO) !== 'undefined') {
              window.DUOSHUO.EmbedThread(ds)
              jq('.duoshuo').append(ds)
              clearInterval(timer)
            }
          }, 1000)
        } else {
          window.DUOSHUO.EmbedThread(ds)
          jq('.duoshuo').append(ds)
        }
      },
      // 头图初始化
      initHeadImg () {
        if (typeof (this.head.img) !== 'undefined') {
          if (typeof (this.head.img.url) !== 'undefined') {
            jq('.head-img').css({'backgroundImage': 'url("' + this.head.img.url + '")'})
          }
          if (typeof (this.head.img.position) !== 'undefined') {
            let posX = typeof (this.head.img.position[0]) === 'undefined' ? '' : this.head.img.position[0]
            let posY = typeof (this.head.img.position[1]) === 'undefined' ? '' : this.head.img.position[1]
            jq('.head-img').css({'backgroundPosition': posX + ' ' + posY})
          }
        } else {
          jq('.head-img').css({'height': 0})
        }
      }
    },
    ready () {
      // 加载多说评论
      this.initDuoshuo()
      // 头图
      this.initHeadImg()
      // 代码高亮
      jq('pre > code').each(function () {
        hljs.highlightBlock(this)
      })
      let el = this
      // 文章中的链接处理
      jq('.markdown a').each(function () {
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
      // 文章中图片放大查看
      jq('.markdown img').click(function () {
        el.openMask({ type: 'image', imgUrl: this.src })
      })
    }
  }

</script>
<style lang="scss">
  @import '../stylesheets/hljs_styles/darkula.css';
  @import '../stylesheets/md_styles/default';
  @import '../stylesheets/base';

  .article {
    background-color: $white;

    .head-img {
      width: 100%;
      height: 500px;
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: $media-width-1) {
        height: 70vw;
      }
    }

    .header, .markdown, .duoshuo {
      @media(max-width: 817px) {
        margin: 0 20px;
      }
    }

    .header {
      color: #555555;
      border-bottom: 1px solid #efeaea;

      .title {
        margin-bottom: 0;
        font-size: 36px;
      }
    }
  }
</style>
