<template lang="jade">
    div.navbar.flex-center-justify
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
    height: 56px;
    background-color: $white;

    @media(max-width: 1000px) {
      justify-content: flex-start;
    }

    .logo {
      position: absolute;
      color: #555555;
      font-size: 48px;
      margin-left: 20px;
      margin-right: 120px;
      width: 240px;
      height: 100%;
      cursor: pointer;
      left: 0;

      @media(max-width: 1000px) {
        position: static;
        left: auto;
      }
    }

    a {
      width: 150px;
      height: 50px;
      color: gray;
      font-size: 18px;

      &:hover {
        color: #555555;
      }

      p {
        margin-top: 20px;
      }
    }
  }
</style>
