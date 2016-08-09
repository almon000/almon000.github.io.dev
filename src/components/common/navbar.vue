<template lang="jade">
    div.navbar.flex-center-align
      p.flex.logo(v-link="{ path: '/', activeClass: 'v-link-active-nostyle' }") A.L.M.O.N<sub>夏</sub>
      a.flex(v-link="{ path: '/post' }") Posts
      a.flex Demos
      a.flex About
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
    background-color: transparentize($black, 0.7);

    .logo {
      color: white;
      font-size: 48px;
      margin-left: 20px;
      margin-right: 20px;
      width: 240px;
      height: 100%;
      align-items: flex-end;
      line-height: 0.9;
      cursor: pointer;

      sub {
        font-size: 14px;
        margin-left: 4px;
        margin-bottom: 14px;
      }
    }

    a {
      width: 150px;
      height: 100%;
      color: white;
      font-size: 18px;
      padding-left: 10px;
      align-items: flex-end;

      &:hover {
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
