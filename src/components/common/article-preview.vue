<template lang="jade">
  div.flex.article-preview(v-for="article in articleIndex")
    img.thumb(v-bind:src="article.img.url + '?imageView2/1/w/200/h/120'")
    div.flex-column.article
      a(v-link="{ path: '/post/' + article.title }")
        h2.topic {{ article.title }}
      div.flex-center-align.article-info
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
    width: 100%;
    height: 120px;
    padding: 10px 20px;

    .thumb {
      flex-shrink: 0;
      width: 200px;
      margin-right: 20px;
    }

    .article {
      flex-grow: 1;
      align-items: flex-start;

      .topic {
        color: #555555;
        flex-grow: 2;
      }

      .article-info {
        flex-grow: 1;

        p, a {
          color: #555555;
          font-size: 14px;
          margin-right: 10px;
          height: 20px;
        }

        .date { margin-top: 20px; }

        .tag {
          height: 18px;
          padding: 0 4px;
          border: 1px solid #c3c3c3;
          border-radius: 4px;
        }
      }
    }
  }
</style>
