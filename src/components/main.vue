<template lang="jade">
  div.main.flex-column.flex-center
    h1 Hello world!
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
      margin-left: 10px;
      a {
        margin-right: 10px;
        color: black;
        &:hover { color: lighten(black, 30%); }
      }
    }
  }
</style>
