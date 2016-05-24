<template lang="jade">
  div
    div.title
      h1 almon000
    div.content
      div.main
        router-view
      div.sidebar
        h2 侧边栏
</template>

<script>
require('normalize.css')

export default {
}
</script>

<style lang="scss">

  body {
    display: flex;
    flex-direction: column;
  }

  div {
    border: 1px solid;
  }

  .title {
    width: 100%;
    height: 150px;
  }

  .content {
    width: 100%;
    display: flex;
  }

  .main {
    flex-grow:  1
  }

  .sidebar {
    width: 100px;
    flex-shrink: 0;
  }
</style>
