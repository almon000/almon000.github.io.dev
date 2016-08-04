<template lang="jade">
  div.main
    div.almon.flex-column
      p.logo A.L.M.O.N
      div.nav.flex-column
        a(v-link="{ path: '/post' }") Posts
        a Demos
        a About
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../stylesheets/base';

  .main {
    height: 100vh;
    width: 100vw;
    background-image: url('http://ob54s56n6.bkt.clouddn.com/almon-summer.jpg');
    background-repeat:no-repeat;
    background-size: cover;

    .almon {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 300px;
      background-color: rgba(255, 255, 255, 0.15);
      // border-radius: 10px;

      .logo {
        color: white;
        margin: 10px auto;
        font-size: 48px;
      }

      .nav {
        a {
          width: 300px;
          color: white;
          font-size: 18px;
          text-align: center;
          line-height: 1.5;

          &:hover {
            background-color: $black;
          }
        }
      }
    }
  }
</style>
