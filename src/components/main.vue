<template lang="jade">
  div.main
    div.almon.flex-column.flex-center-align
      p.logo A.L.M.O.N
      div.nav.flex
        a(v-link="{ path: '/post' }") Posts
        a Demos
        a About
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    width: 100vw;
    background-image: url('http://ob54s56n6.bkt.clouddn.com/almon-summer.jpg');

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
        width: 300px;
        margin: 10px auto;
        justify-content: space-around;

        a {
          color: white;
          font-size: 18px;

          &:hover {
            color: darken(white, 20%);
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
