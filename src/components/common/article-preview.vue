<template lang="jade">
  div.flex.article-preview(v-for="article in articleIndex")
    img.thumb(v-bind:src="article.img.url + '?imageView2/1/w/200/h/120'",
        v-link="{ path: '/post/' + article.title }")
    div.flex-column.article1
      a.title(v-link="{ path: '/post/' + article.title }")
        h3 {{ article.title }}
      div.flex-center-align.info
        p.date {{ article.date }}
        a.tag(v-for="tag in article.tags", v-link="{ path: '/tag/' + tag }" ) {{ tag }}
</template>

<script>
  export default {
    props: ['articleIndex']
  }
</script>

<style lang="scss" scoped>
  @import '../../stylesheets/base';

  .article-preview {
    height: 120px;
    margin: 10px 20px;

    @media (max-width: $media-width-3) { margin: 10px 32px; }
    @media (max-width: $media-width-2) { height: 60px; }

    .thumb {
      width: 200px;
      margin-right: 20px;
      cursor: pointer;

      @media (max-width: $media-width-2) {
        width: 0;
        margin-right: 0;
      }
    }

    .article1 {
      flex-grow: 1;
      align-items: flex-start;

      .title {
        flex-grow: 2;
      }

      .info {
        flex-grow: 1;

        @media (max-width: $media-width-2) {
          height: 0;
        }
      }
    }
  }
</style>
