<template lang="jade">
    div.navbar.flex
      span.flex-center-align.logo(v-link="{ path: '/', activeClass: 'v-link-active-nostyle' }") A.L.M.O.N
      a.flex-center-justify(v-link="{ path: '/post' }")
        p 文章
      a.flex-center-justify
        p 项目
      a.flex-center-justify
        p 关于
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../../stylesheets/base';

  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: auto;
    justify-content: flex-end;
    background-color: white;
    z-index: 99;

    @media (max-width: $media-width-1) {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .logo {
      font-size: 48px;
      margin-left: 32px;
      margin-right: 120px;
      width: 240px;
      height: 100%;
      cursor: pointer;
      flex-grow: 1;

      @media (max-width: $media-width-1) {
        width: 100%;
      }
    }

    a {
      width: 100px;
      height: 50px;
      color: gray;
      font-size: 18px;

      &:hover {
        color: $color-text-dark;
      }

      p {
        margin-top: 20px;
      }
    }
  }
</style>
