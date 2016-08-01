<template lang="jade">
  div.main.flex-column.flex-center
    img.almon(src="../assets/img/almon.png")
    div.fields.flex
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

    .fields {
      width: 490px;
      margin-top: 30px;
      justify-content: space-around;

      a {
        color: black;
        font-size: 24px;

        &:hover {
          color: lighten(black, 30%);
          text-decoration: underline;
        }
      }
    }
  }
</style>
